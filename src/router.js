import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/layout/MainLayout'
import store from './store/store'

Vue.use(Router)

const router = new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: 'Welcome',
            component: MainLayout,
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'symptoms',
                    name: 'Symptoms',
                    component: () => import('./views/FollowingSymptoms.vue')
                },
                {
                    path: 'call-emergency',
                    name: 'CallEmergency',
                    component: () => import('./views/CallEmergency.vue')
                },
                {
                    path: 'share-information',
                    name: 'ShareInformation',
                    component: () => import('./views/ShareInformation.vue')
                },
                {
                    path: 'how-do-you-fell',
                    name: 'HowDoYouFell',
                    component: () => import('./views/HowDoYouFell.vue')
                },
                {
                    path: 'why-feel-unwell',
                    name: 'WhyFeelUnwell',
                    component: () => import('./views/FeelUnwell.vue')
                },
                {
                    path: 'do-you-smoke',
                    name: 'DoYouSmoke',
                    component: () => import('./views/DoYouSmoke.vue')
                },
                {
                    path: 'prior-health-condition',
                    name: 'PriorHealthCondition',
                    component: () => import('./views/PriorHealthConditions.vue')
                },
                {
                    path: 'you-want-participate',
                    name: 'YouWantParticipate',
                    component: () => import('./views/YouWantParticipate.vue')
                },
                {
                    path: 'clinical-trial-information',
                    name: 'ClinicalTrialInformation',
                    component: () => import('./views/ClinicalTrialInformation.vue')
                },
                {
                    path: 'you-have-sore-throat',
                    name: 'YouHaveSoreThroat',
                    component: () => import('./views/YouHaveSoreThroat.vue')
                },
                {
                    path: 'how-sore-throat',
                    name: 'HowSoreThroat',
                    component: () => import('./views/HowSoreThroat.vue')
                },
                {
                    path: 'you-have-headache',
                    name: 'YouHaveHeadache',
                    component: () => import('./views/YouHaveHeadache.vue')
                },
                {
                    path: 'how-headache',
                    name: 'HowHeadache',
                    component: () => import('./views/HowHeadache.vue')
                },
                {
                    path: 'you-have-fever',
                    name: 'YouHaveFever',
                    component: () => import('./views/YouHaveFever.vue')    
                },
                {
                    path: 'you-have-muscle-aches',
                    name: 'YouHaveMuscleAches',
                    component: () => import('./views/YouHaveMuscleAches.vue')    
                },
                {
                    path: 'how-muscle-aches',
                    name: 'HowMuscleAches',
                    component: () => import('./views/HowMuscleAches.vue')
                },
                {
                    path: 'you-have-cough',
                    name: 'YouHaveCough',
                    component: () => import('./views/YouHaveCough.vue')    
                },
                {
                    path: 'how-cough',
                    name: 'HowCough',
                    component: () => import('./views/HowCough.vue')
                },
                {
                    path: 'you-have-difficulty-breath',
                    name: 'YouHaveDifficultyBreath',
                    component: () => import('./views/YouHaveDifficultyBreath.vue')            
                },
                {
                    path: 'how-breathe',
                    name: 'HowBreathe',
                    component: () => import('./views/HowBreathe.vue')            
                },
                {
                    path: 'contact-anyone',
                    name: 'ContactAnyone',
                    component: () => import('./views/ContactAnyone.vue')               
                },
                {
                    path: 'talk-doctor',
                    name: 'TalkDoctor',
                    component: () => import('./views/TalkDoctor.vue')               
                },
                {
                    path: 'coronavirus-test',
                    name: 'CoronavirusTest',
                    component: () => import('./views/CoronavirusTest.vue')               
                },
                {
                    path: 'coronavirus-result',
                    name: 'CoronavirusResult',
                    component: () => import('./views/CoronavirusResult.vue')               
                },
                {
                    path: 'show-hospitals',
                    name: 'ShowHospitals',
                    component: () => import('./views/ShowHospitals.vue')                
                },
                {
                    path: 'wash-your-hands',
                    name: 'WashYourHands',
                    component: () => import('./views/WashYourHands.vue')                
                },
                {
                    path: 'when-symptoms-start',
                    name: 'WhenSymptomsStart',
                    component: () => import('./views/WhenSymptomsStart.vue')
                },
                {
                    path: 'select-date',
                    name: 'SelectDate',
                    component: () => import('./views/SelectDate.vue')
                },
                {
                    path: 'have-you-traveled',
                    name: 'HaveYouTraveled',
                    component: () => import('./views/HaveYouTraveled.vue')
                },
                {
                    path: 'what-temperature-have',
                    name: 'WhatTemperatureHave',
                    component: () => import('./views/WhatTemperatureHave.vue')
                },
                {
                    path: 'cough-recording',
                    name: 'CoughRecording',
                    component: () => import('./views/CoughRecording.vue')
                },
                {
                    path: 'find-hospital',
                    name: 'FindHospital',
                    component: () => import('./views/FindHospital.vue')
                },
                {
                    path: 'which-health-conditions',
                    name: 'WhichHealthConditions',
                    component: () => import('./views/WhichHealthConditions.vue')
                },
                {
                    path: 'backup',
                    name: 'Backup',
                    component: () => import('./views/Backup.vue')
                }
            ]     
        },
        {
            path: '/',
            redirect: 'Welcome',
            component: MainLayout,
            children: [
                {
                    path: 'sign-in',
                    name: 'SignIn',
                    component: () => import('./views/SignIn.vue')
                },
                {
                    path: 'welcome',
                    name: 'Welcome',
                    component: () => import('./views/Welcome.vue')
                },
                {
                    path: 'advertisement',
                    name: 'Advertisement',
                    component: () => import('./views/Advertisement.vue')
                },
                {
                    path: 'gender',
                    name: 'Gender',
                    component: () => import('./views/Gender.vue')
                },
                {
                    path: 'who-are-you',
                    name: 'WhoAreYou',
                    component: () => import('./views/WhoAreYou.vue')
                },
                {
                    path: 'whats-your-number',
                    name: 'WhatsYourNumber',
                    component: () => import('./views/WhatsYourNumber.vue')
                },
                {
                    path: 'verify',
                    name: 'Verify',
                    component: () => import('./views/Verify.vue')
                }
            ]
        }   
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const loggedIn = store.getters.getUserAddress
    
    if (requiresAuth && loggedIn === '')
        next('Welcome')
    else
        next()
})

export default router