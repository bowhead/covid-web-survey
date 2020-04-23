<template>
    <div class="container have-sore-throat">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="43" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-3.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-2 col-8 text-center ">
                <label class="title">{{ $t('youHaveSoreThroat.title') }}</label>
            </div>
        </div>
        <yes-no class="pt-1"
        @yes="yes"
        @no="no"></yes-no>
    </div>
</template>

<script>
import YesNo from '../components/YesNoButtons.vue'

export default {
    methods: {
        yes: function() {
            const answer = {
                key: 'have_a_sore_throat',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$store.commit('SET_HAS_SYMPTOMS', true)
            this.$router.push({ name: 'HowSoreThroat' })  
        },
        no: function() {
            const answer = {
                key: 'have_a_sore_throat',
                value: 'no'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'YouHaveHeadache' })  
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.have-sore-throat .row-img {
    padding-top: 4.5rem;
}

.have-sore-throat .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3.2rem;
}

.have-sore-throat .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>