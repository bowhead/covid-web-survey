<template>
    <div class="container contact-anyone">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="74" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-20.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="col-12 offset-md-3 col-md-6 text-center ">
                <label class="title">{{ $t('contactAnyone.info') }}</label>
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
                key: 'have_been_around_ill_people',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'SelectDate' })
        },
        no: function() {
            const answer = {
                key: 'have_been_around_ill_people',
                value: 'no'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'HaveYouTraveled' })
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.contact-anyone .row-img {
    padding-top: 4.5rem;
}

.contact-anyone .row-title {
    padding-top: 2.5rem;
    padding-bottom: 1rem;
}

.contact-anyone .title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
}
</style>