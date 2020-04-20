<template>
    <div class="container talk-doctor">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="85" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-23.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center ">
                <label class="title">{{ $t('talkDoctor.title') }}</label>
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
                key: 'talk_to_doctor_or_nurse',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'CoronavirusTest' })
        },
        no: function() {
            const answer = {
                key: 'talk_to_doctor_or_nurse',
                value: 'no'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'CoronavirusTest' })
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.talk-doctor .row-img {
    padding-top: 3.2rem;
}

.talk-doctor .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3.1rem;
}

.talk-doctor .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>