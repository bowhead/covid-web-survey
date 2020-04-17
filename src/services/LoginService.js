import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URI,
    withCredentials:true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

apiClient.interceptors.request.use(config => {
    NProgress.start()
    return config
})

apiClient.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export default {
    register(data) {
        return apiClient.post('/metadata/profile', data)
    },
    saveSurvey(surveyData) {
        return apiClient.post('/researchData', surveyData)
    }
}