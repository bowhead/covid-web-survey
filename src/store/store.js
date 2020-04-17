import Vue from 'vue'
import Vuex from 'vuex'
import LoginService from '@/services/LoginService.js'

Vue.use(Vuex)

export default new Vuex.Store({
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
        data : {
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
    },
    mutations: {
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
        }
    },
    actions: {
        register ({ commit }, registerData) {
            return LoginService.register(registerData)
                .then(({ data }) => {
                    commit('SET_USER', data)
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
        }
    }
});