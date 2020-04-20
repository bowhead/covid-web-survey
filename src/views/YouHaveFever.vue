<template>
    <div class="container have-fever">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="49" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-11.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center ">
                <label class="title">{{ $t('youHaveFever.title') }}</label>
            </div>
        </div>
        <div class="row row-info">
            <div class="offset-1 col-10 text-center">
                <label class="info">{{ $t('youHaveFever.info') }}</label>         
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
                key: 'have_a_fever',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$store.commit('SET_HAS_SYMPTOMS', true)
            this.$router.push({ name: 'WhatTemperatureHave' }) 
        },
        no: function() {
            const answer = {
                key: 'have_a_fever',
                value: 'no'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'YouHaveMuscleAches' })
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.have-fever .row-img {
    padding-top: 4rem;
}

.have-fever .row-title {
    padding-top: 3.5rem;
}

.have-fever .row-info {
    padding-top: .5rem;
    padding-bottom: 3.2rem;
    color: #989898;
    font-size: 1.3rem;
}

.have-fever .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>