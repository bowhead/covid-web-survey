import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import LoginService from '@/services/LoginService.js'
import aes256 from 'aes256'
const ahtTransactions = require('../lib/ahtTransactions.js')

Vue.use(Vuex)

function surveyInitialData() {
    const data = {
        "cough_level" : null,
        "share_identifiable_information" : null,
        "want_to_participate_on_clinical_trial" : null,
        "talk_to_doctor_or_nurse" : null,
        "have_a_sore_throat" : null,
        "how_do_you_feel" : null,
        "have_been_around_ill_people" : null,
        "not_feel_well_reason" : null,
        "have_cough" : null,
        "have_difficulty_breathing" : null,
        "where_test_was_taken_location" : null,
        "breathe_difficulty_level" : null,
        "have_a_headache" : null,
        "got_a_coronavirus_test" : null,
        "smoke" : null,
        "cough_recording" : null,
        "prior_health_conditions" : null,
        "have_been_around_ill_date" : null,
        "muscle_aches_level" : null,
        "clinical_trial_personal_information" : null,
        "temperature_value" : null,
        "sore_throat_level" : null,
        "symptoms_start_date" : null,
        "coronavirus_test_result" : null,
        "have_muscle_aches" : null,
        "have_a_fever" : null,
        "headache_level" : null,
        "closest_hospital_location_wanted" : null,
        "has_serious_health_conditions" : null,
        "traveled_locations" : null,
        "timestamp" : null,
        "have_any_prior_health_conditions" : null
    }
    return data
}

export default new Vuex.Store({
    plugins: [ createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        percentage: 0,
        lastPage: '',
        hasSymptoms: false,
        hasTraveled: false,
        user: null,
        address: '',
        publicKey: '',
        privateKey: '',
        registerInformation: {
            gender: '',
            birthDate: '',
            height: '',
            heightMetric: '',
            weight: '',
            weightMetric: '',
            nickname: '',
            countryCode: ''
        },
        data : surveyInitialData(),
        words: [],
        hash1: '',
        hash2: '',
        conditions: []
    },
    mutations: {
        SET_AUTHORIZATION(state, userData) {
            window.localStorage.setItem('x-auth-token', `Bearer ${
                userData   
            }`)
            axios.defaults.headers.common['x-auth-token'] = `Bearer ${
                userData   
            }`
        },
        SET_PERCENTAGE (state, percentage) {
            state.percentage = percentage
        },
        SET_LAST_PAGE (state, page) {
            state.lastPage = page
        },
        SET_HAS_SYMPTOMS (state, has) {
            state.hasSymptoms = has
        },
        SET_HAS_TRAVELED (state, travel) {
            state.hasTraveled = travel
        },
        SET_USER (state, user) {
            state.user = user
        },
        SET_REGISTER_INFORMATION (state, value) {
            value.forEach(item => {
                state.registerInformation[item.key] = item.data 
            });
        },
        SET_DATA_SURVEY (state, data) {
            state.data[data.key] = data.value
        },
        SET_ACCOUNT(state, account) {
            state.address = account.address
            state.publicKey = account.publicKey
            state.privateKey = account.privateKey
            window.localStorage.setItem('credentials', JSON.stringify(account))
        },
        SET_WORDS(state, words) {
            state.words = words
        },
        SET_HASH(state, data) {
            state.hash1 = data.hash1
            state.hash2 = data.hash2
        },
        CLEAN_DATA(state) {
            state.hash1 = ''
            state.hash2 = ''
            state.hasSymptoms = false
            state.hasTraveled = false
            state.data = surveyInitialData
        },
        SET_CONDITIONS(state, conditions) {
            state.conditions = conditions
        }
    },
    actions: {
        register ({ commit, state }) {

            let user = {
                address: state.address,
                gender: state.registerInformation.gender,
                birthDate: state.registerInformation.birthDate,
                height: state.registerInformation.height,
                heightMetric: state.registerInformation.heightMetric,
                weight: state.registerInformation.weight,
                weightMetric: state.registerInformation.weightMetric,
                nickname: state.registerInformation.nickname,
                countryCode: state.registerInformation.countryCode
            }

            return LoginService.register(user)
                .then(({ data }) => {
                    window.localStorage.removeItem('nonce')
                    commit('SET_USER', data)
                })
        },
        getSurveyHash({ commit, state}) {
            let credentials = JSON.parse(window.localStorage.getItem('credentials'))

            let covidSurvey = {
                data: aes256.encrypt(credentials.privateKey, JSON.stringify(state.data)) 
            }

            return LoginService.addHealthData(covidSurvey)
                .then(({ data }) => {
                    commit('SET_HASH', data)
                })
        },
        async saveSurvey({commit, state}) {
            let gameAbiAddress = process.env.VUE_APP_GAME_ABI,
                credentials = JSON.parse(window.localStorage.getItem('credentials')),
                txData;

            let survey = {
                address: credentials.address,
                type: 'COVID19_Survey',
                data: state.data
            }

            try {
                txData = await ahtTransactions.addSurveyData({
                    'contractAddress': gameAbiAddress,
                    'address': credentials.address,
                    'chainId': Number(process.env.VUE_APP_CHAIN_ID),
                    'privateKey': credentials.privateKey
                });
                survey.txHash = txData;

                return LoginService.saveSurvey(survey)
                    .then(({data}) => {
                        console.log(data)
                        commit('CLEAN_DATA')
                    })
            } catch (error) {
                throw error;
            }
        },
        async uploadCoughRecording({commit}, file) {
            let data = await LoginService.uploadCoughRecording(file)

            const coughRecording = {
                key: 'cough_recording',
                value: data.data.url
            }

            commit('SET_DATA_SURVEY', coughRecording)
        },
        async getConditions({commit}, term) {
            return LoginService.getConditions(term)
                .then(({ data }) => {
                    commit('SET_CONDITIONS', data)
                })
        }
    },
    getters: {
        getPercentage: state => {
            return state.percentage;
        },
        getLastPage: state => {
            return state.lastPage
        },
        getHasSymptoms: state => {
            return state.hasSymptoms
        },
        getHasTraveled: state => {
            return state.hasTraveled
        },
        getWords: state => {
            return state.words
        },
        getUserAddress: state => {
            return  state.address
        },
        getFilterConditions: state => {
            return state.conditions
        }
    }
});