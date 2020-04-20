import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URI,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.getItem('x-auth-token'),
        'Authorization': 'Basic MTc3M2EzODZkMGMzM2EzY2EyMWMyZGRlNWQ5Y2RjMWZiZGJkMTU5ZDQyZDkwYWYwZDNjZTRiMTM2NGZiZWM1NTpkMWJmYmM1ZTIxNGMzYWJiMTEyNzNiYjJlYmZhZDFiYzNiNmI1NTVhZWQyMjViZjg5YmU5ZDYwYzYyODYyNDli'
    },
    timeout: 50000
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
    addHealthData(data) {
        return apiClient.post('/addHealthData', data)
    },
    saveSurvey(surveyData) {
        return apiClient.post('/researchData', surveyData)
    },
    async uploadCoughRecording(file) {
        
        const form = new FormData();
        form.append('file', file, + new Date() + '.wav')

        let response = await apiClient.post('/audio/upload', form)

        return response
    },
    getConditions(term) {
        return apiClient.get('/conditions/search/?searchTerm=' + term)
    }
}