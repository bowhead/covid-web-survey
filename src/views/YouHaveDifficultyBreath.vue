<template>
    <div class="container have-difficulty-breath">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="64" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-18.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center ">
                <label class="title">{{ $t('youHaveDifficultyBreath.title') }}</label>
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
        yes: function() {
            const answer = {
                key: 'have_difficulty_breathing',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'HowBreathe' })
        },
        no: function() {
            const answer = {
                key: 'have_difficulty_breathing',
                value: 'no'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)

            if (this.hasSymptoms) {
                this.$router.push({ name: 'WhenSymptomsStart' })
            } else {
                switch (this.lastPage) {
                    case 'WhyFeelUnwell':
                        this.$router.push({ name: 'ContactAnyone' })
                        break;
                    case 'Symptoms':
                        if (this.hasSymptoms || this.hasTraveled) {
                            this.$router.push({ name: 'ShowHospitals' }) 
                        } else {
                            this.$router.push({ name: 'WashYourHands' }) 
                        }
                        break;
                }
            }
        }
    },
    components: {
        YesNo
    },
    computed: {
        lastPage () {
            return this.$store.getters.getLastPage;
        },
        hasSymptoms () {
            return this.$store.getters.getHasSymptoms;
        },
        hasTraveled() {
            return this.$store.getters.getHasTraveled;
        }
    }
}
</script>

<style>
.have-difficulty-breath .row-img {
    padding-top: 4.5rem;
}

.have-difficulty-breath .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3.2rem;
}

.have-difficulty-breath .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>