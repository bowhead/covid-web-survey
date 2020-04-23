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
        login: false,
        surveyAnswered: false,
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
        SET_LOGIN(state) {
            state.login = true
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
        CLEAN_DATA(state) {
            state.hasSymptoms = false
            state.hasTraveled = false
            state.lastPage = ''
            state.data = surveyInitialData()
        },
        SET_CONDITIONS(state, conditions) {
            state.conditions = conditions
        },
        SET_SURVEY_ANSWERED(state, answered) {
            state.surveyAnswered = answered
        },
        CLEAN_ACCOUNT(state) {
            state.address = ''
            state.privateKey = ''
            state.publicKey = ''
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
        async saveSurvey({commit, state}) {
            let gameAbiAddress = process.env.VUE_APP_GAME_ABI,
                credentials = JSON.parse(window.localStorage.getItem('credentials')),
                txData;

            let covidSurvey = {
                data: aes256.encrypt(credentials.privateKey, JSON.stringify(state.data)) 
            }

            let hashSurvey = await LoginService.addHealthData(covidSurvey)

            let survey = {
                address: credentials.address,
                type: 'COVID19_Survey',
                data: state.data
            }

            try {
                txData = await ahtTransactions.saveHash({
                    'type': 'COVID19_Survey',
                    'contractAddress': gameAbiAddress,
                    'address': credentials.address,
                    'chainId': Number(process.env.VUE_APP_CHAIN_ID),
                    'privateKey': credentials.privateKey,
                    'hash1': hashSurvey.data.hash1,
                    'hash2': hashSurvey.data.hash2
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
        },
        async saveUserData({commit, state}) {
            let credentials = JSON.parse(window.localStorage.getItem('credentials'))

            let user = {
                data: aes256.encrypt(credentials.privateKey, JSON.stringify(state.registerInformation))
            }

            let data = await LoginService.addHealthData(user);

            let gameAbiAddress = process.env.VUE_APP_GAME_ABI,
                txData;

            let userInformation = {
                address: credentials.address,
                type: 'Profile',
                data: state.registerInformation
            }

            try {
                txData = await ahtTransactions.saveHash({
                    'type': 'Profile',
                    'contractAddress': gameAbiAddress,
                    'address': credentials.address,
                    'chainId': Number(process.env.VUE_APP_CHAIN_ID),
                    'privateKey': credentials.privateKey,
                    'hash1': data.data.hash1,
                    'hash2': data.data.hash2
                });
                userInformation.txHash = txData;
                
                commit('CLEAN_DATA')
            } catch (error) {
                throw error;
            }
        },
        async login({commit}, account) {
            let gameAbiAddress = process.env.VUE_APP_GAME_ABI,
                txData
            
            try {
                txData = {
                    'contractAddress': gameAbiAddress,
                    'type': 'Profile',
                    'address': account.address
                }

                let user = await ahtTransactions.getInformationData(txData);

                commit('CLEAN_DATA')

                return user

            } catch (error) {
                throw error
            }     
        },
        async hasSurvey({commit}) {
            let gameAbiAddress = process.env.VUE_APP_GAME_ABI,
                credentials = JSON.parse(window.localStorage.getItem('credentials')),
                txData
            
            try {
                txData = {
                    'contractAddress': gameAbiAddress,
                    'type': 'COVID19_Survey',
                    'address': credentials.address
                }

                let survey = await ahtTransactions.getInformationData(txData);

                if(survey[1].substring(0,3) !== '0x0') {
                    commit('SET_SURVEY_ANSWERED', true)
                } else {
                    commit('SET_SURVEY_ANSWERED', false)        
                }
            } catch (error) {
                throw error     
            }
        },
        logout({commit}) {
            commit('CLEAN_ACCOUNT')
            sessionStorage.clear()      
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
        },
        IsLogin: state => {
            return state.login
        },
        hasSurvey: state => {
            return state.surveyAnswered
        }
    }
});