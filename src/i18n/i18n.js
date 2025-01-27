import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const locale = 'en-US' //default locale

export default new VueI18n({
    locale,
    messages: {
        'en-US': {
            general: {
                yes: 'YES',
                no: 'NO',
                continue: 'CONTINUE',
                save: 'SAVE',
                next: 'NEXT',
                mild: 'Mild',
                moderate: 'Moderate',
                severe: 'Severe',
                date: 'Date',
                selectDate: 'Select date',
                missingFields: 'Complete the missing fields to continue'
            },
            signIn: {
                title: '12 words security',
                info: 'Use your 12 words generated by the app to access to your account.',
                import: 'IMPORT ACCOUNT',
                error: 'Please ensure all the words are correct'
            },
            welcome: {
                welcomeTo: 'Welcome to',
                healthyHabits: 'Healthy Habits',
                create: 'CREATE ACCOUNT',
                haveAccount: 'Already have an account?',
                signIn: 'Sign In'
            },
            gender: {
                hello: 'Hello,',
                started: 'Let\'s get started with the basics!',
                male: 'MALE',
                female: 'FEMALE'
            },
            whoAreYou: {
                title: 'Who are you?',
                info: 'Data won\'t be shared without consent.',
                name: 'Name',
                birth: 'Date of birth (day-month-year)',
                weight: 'Weight',
                height: 'Height',
                lbs: 'lbs',
                ft: 'ft',
                cancel: 'CANCEL',
                accept: 'ACCEPT',
                missingFields: 'Complete the missing fields to continue'
            },
            whatsYourNumber: {
                title: 'Whats\'s your number?',
                info: 'This way we can verify you\'re you.'
            },
            verify: {
                title: 'We\'ve sent you a code to verify your number',
                didntGet: 'Didn\'t get it?',
                resend: 'Resend in 00:25'
            },
            advertisement: {
                info: 'This app does not replace seeking medical advice and is for informational purpose only.',
                submit: 'I AGREE, CONTINUE'
            },
            symptoms: {
                followingSymptoms: 'Are you experiencing any of the following symptoms?',
                difficultyBreathing: 'Severe difficulty breathing',
                difficultyBreathingEx: '(for examples, struggling for each breath, speaking in single words)',
                chestPain: 'Severe chest pain',
                confusion: 'Confusion',
                confusionEx: '(for example, unsure of where you are)',
                lostConsciousness: 'Lost consciousness'
            },
            callEmergency: {
                info: 'Please call your local emergency telephone number or go directly to your nearest emergency department.'
            },
            shareInformation: {
                title: 'Would you like to share your identifiable information with your public health officials?',
                nickname: 'Nickname',
                age: 'Age',
                gender: 'Gender',
                phoneNumber: 'Phone number',
                symptoms: 'Symptoms'
            },
            howfell: {
                title: 'How do you fell?',
                feelWell: 'I FEEL WELL',
                feelUnwell: 'I FEEL UNWELL'
            },
            feelUnwell: {
                title: 'Why do you feel unwell?',
                feelIll: 'I FEEL ILL',
                tired: 'TIRED/EXHAUSTED'
            },
            youSmoke: {
                title: 'Do you smoke?'
            },
            priorHealthCondition: {
                title: 'Do you have any prior health conditions?',
                iAmHealthy: 'NO, I AM HEALTHY'
            },
            youWantParticipate: {
                title: 'Do you want to participate on a clinical trial?'
            },
            clinicalTrialInformation: {
                title: 'Clinical Trial Information',
                info: 'We will need the following details to contact you if there is a potential match. These details will not be used for any other purposes.',
                email: 'email',
                firstName: 'First name',
                lastName: 'Last name',
                city: 'City',
                state: 'State',
                country: 'Country'
            },
            youHaveSoreThroat: {
                title: 'Do you have a sore throat?'
            },
            howSoreThroat: {
                title: 'How sore is your throat?'
            },
            youHaveHeadache: {
                title: 'Do you have a headache?'
            },
            howHeadache: {
                title: 'How is your headache?'
            },
            youHaveFever: {
                title: 'Do you have a fever?',
                info: 'Fever is over 38 ºC / 100 ºF'
            },
            youHaveMuscleAches: {
                title: 'Do you have muscle aches?'
            },
            howMuscleAches: {
                title: 'How are your muscle aches?'
            },
            youHaveCough: {
                title: 'Do you have cough?'
            },
            howCough: {
                title: 'How is your cough?',
                dry: 'Dry',
                productive: 'Productive with Phlegm'
            },
            youHaveDifficultyBreath: {
                title: 'Do you have difficulty breathing?'
            },
            howBreathe: {
                title: 'How difficult is it to breathe?'
            },
            symptomsStart: {
                title: 'When did your symptoms start?'
            },
            contactAnyone: {
                info: 'Have you been in contact with anyone in the last two weeks that had cough, diffuculty breathing or fever?'
            },
            talkDoctor: {
                title: 'Do you need to talk to a doctor or nurse?'
            },
            coronavirusTest: {
                title: 'Did you get a Coronavirus test?'
            },
            coronavirusResult: {
                title: 'What was the result?',
                positive: 'POSITIVE',
                negative: 'NEGATIVE',
                waiting: 'WAITING FOR RESULTS'
            },
            showHospitals: {
                info: 'It looks like you have some of the COVID-19 symptoms, if they are not severe isolate for 14 days or if you need urgent help contact a local hospital or medical professional.',
                showHospitals: 'SHOW HOSPITALS AROUND ME',
                noThanks: 'NO THANKS'
            },
            whasYourHands: {
                info: 'According to your responses and the World Health Organization you are not displaying symptoms of Coronavirus.',
                info2: 'Make sure you wash your hands and practice social distancing.',
                done: 'DONE'
            },
            haveYouTraveled: {
                title: 'Where have you traveled to in the last 30 days?',
                germany: 'Germany',
                spain: 'Spain',
                iran: 'Iran',
                korea: 'Korea',
                china: 'China',
                italy: 'Italy',
                none: 'NONE OF ABOVE'
            },
            whatTemperatureHave: {
                title: 'What temperature do you have?',
                noExact: 'I don\'t have exact temperature'
            },
            coughRecording: {
                title: 'Cough recording',
                info: 'Click and record how your cough sounds',
                record: 'RECORD YOUR COUGH',
                save: 'SAVE',
                stop: 'STOP',
                skip: 'Skip'
            },
            findHospital: {
                title: 'Find your closest hospital',
                address: 'ADDRESS',
                find: 'FIND MY LOCATION',
                done: 'DONE'
            },
            whichHealthConditions: {
                title: 'Which health conditions do you have?',
                asthma: 'Asthnma',
                copd: 'COPD',
                heart: 'Heart disease',
                diabetes: 'Diabetes',
                hypertension: 'Hypertension',
                obesity: 'Obesity',
                other: 'Other'
            },
            backup: {
                info: 'Please make sure that you write these words down in correct order.',
                warning: 'Warning:',
                warningInfo: 'If you lose this we cannot recovery your account and all information will be lost.'
            }
        }
    }
})