<template>
    <div class="container have-headache">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="47" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-4.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-2 col-8 text-center ">
                <label class="title">{{ $t('youHaveHeadache.title') }}</label>
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
                key: 'have_a_headache',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$store.commit('SET_HAS_SYMPTOMS', true)
            this.$router.push({ name: 'HowHeadache' })
        },
        no: function() {
            const answer = {
                key: 'have_a_headache',
                value: 'no'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'YouHaveFever' })
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.have-headache .row-img {
    padding-top: 4rem;
}

.have-headache .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3.2rem;
}

.have-headache .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>