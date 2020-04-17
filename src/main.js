import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/i18n'
import store from './store/store'
import VueMaterial from 'vue-material'
import Progress from 'vue-multiple-progress'
import VModal from 'vue-js-modal'
import firebase from 'firebase'
import VueSimpleAlert from 'vue-simple-alert'
import * as VueGoogleMaps from 'vue2-google-maps'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(VueMaterial)
Vue.use(Progress)
Vue.use(VModal)
Vue.use(VueSimpleAlert)

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_API_KEY,
        libraries: 'places'
    },
    installComponents: true
})

Vue.config.productionTip = false

const config = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABSER_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID
}

firebase.initializeApp(config)

new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#app')