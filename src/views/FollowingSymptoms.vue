<template>
    <div class="container following-symptoms">
        <div class="row pt-3">
            <div class="col-12 text-center">
                <img src="../assets/corona-43.png">
            </div>
        </div>
        <div class="row pt-2">
            <div class="offset-1 col-10 text-center text-wrap">
                <label class="symptoms-title">{{ $t('symptoms.followingSymptoms') }}</label>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-11 offset-md-3 col-md-6">
                <ul class="symptoms-list">
                    <li>
                        <span class="symptom">{{ $t('symptoms.difficultyBreathing') }}</span>
                        <p class="example">{{ $t('symptoms.difficultyBreathingEx') }}</p>
                    </li>
                    <li>
                        <p class="symptom">{{ $t('symptoms.chestPain') }}</p>     
                    </li>
                    <li>
                        <span class="symptom">{{ $t('symptoms.confusion') }}</span>
                        <p class="example">{{ $t('symptoms.confusionEx') }}</p>           
                    </li>
                    <li>
                        <p class="symptom">{{ $t('symptoms.lostConsciousness') }}</p>         
                    </li>
                </ul>
            </div>
        </div>
        <div class="row pt-1">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light yes" @click="yes"><b>{{ $t('general.yes') }}</b></button>           
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg no" @click="no"><b>{{ $t('general.no') }}</b></button>           
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        yes: function() {
            const answer = {
                key: 'share_identifiable_information',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)        
            this.$router.push({ name: 'CallEmergency' })
        },
        no: function() {
            const answer = {
                key: 'share_identifiable_information',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            
            this.$store.commit('SET_PERCENTAGE', 9)
            switch (this.lastPage) {
                case 'Advertisement':
                    this.$store.commit('SET_LAST_PAGE', 'Symptoms')
                    this.$router.push({ name: 'HowDoYouFell' }) 
                    break;
                case '':
                    this.$store.commit('SET_LAST_PAGE', 'Symptoms')
                    this.$router.push({ name: 'YouHaveSoreThroat' })
                    break;

            }   
        }
    },
    computed: {
        lastPage () {
            return this.$store.getters.getLastPage
        }
    }
}
</script>

<style scoped>
.following-symptoms .symptoms-title {
    font-weight: 900;
    font-size: 1.3rem;
    line-height: 1.6;
}

.following-symptoms .symptoms-list {
    padding-left: 18px;
}

.following-symptoms .symptom {
    font-weight:600;
    font-size: 1.1rem;
}

.following-symptoms .example {
    font-size: .8rem;
    font-weight: 400;
}

.following-symptoms .yes, .no {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
}

.following-symptoms .yes {
    background-color: #2bb1c4;
}

.following-symptoms .no {
    background-color: white;
    color: #e05e4a;
    border-color: #e05e4a;
    border: 2px solid;
}
</style>