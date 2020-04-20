<template>
    <div class="container share-information">
        <div class="row">
            <div class="col-12 text-center">
                <img src="../assets/corona-45.png">              
            </div>
        </div>
        <div class="row pt-1">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center text-wrap">
                <label class="info">{{ $t('shareInformation.title') }}</label>
            </div>    
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <ul>
                    <li>
                        <p class="field">{{ $t('shareInformation.nickname') }}</p>       
                    </li>
                    <li>
                        <p class="field">{{ $t('shareInformation.age') }}</p>       
                    </li>
                    <li>
                        <p class="field">{{ $t('shareInformation.gender') }}</p>       
                    </li>
                    <li>
                        <p class="field">{{ $t('shareInformation.phoneNumber') }}</p>       
                    </li>
                    <li>
                        <p class="field">{{ $t('shareInformation.symptoms') }}</p>       
                    </li>
                </ul>
            </div>
        </div>
        <yes-no class="pt-1"
        @yes="yes"
        @no="no">
        </yes-no>
    </div>
</template>

<script>
import YesNo from '../components/YesNoButtons.vue'

export default {
    methods: {
        yes: async function() {
            const answer = {
                key: 'share_identifiable_information',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$store.dispatch('getSurveyHash')
            await this.$store.dispatch('saveSurvey')
            this.$router.push({ name: 'Backup' })
        },
        no: async function() {
            const answer = {
                key: 'share_identifiable_information',
                value: 'no'
            }
            
            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$store.dispatch('getSurveyHash')
            await this.$store.dispatch('saveSurvey')
            this.$router.push({ name: 'Backup' })
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.share-information .info{
    font-weight: 800;
    font-size: 1.36rem;
    line-height: 1.5;
}

.share-information li {
    padding-bottom: 10px;
}

.share-information .field {
    font-size: 1rem;
    font-weight: 700;
}
</style>