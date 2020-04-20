<template>
    <div class="container coronavirus-result">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="95" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-33.png">
            </div>
        </div>
        <div class="row pt-5">
            <div class="offset-1 col-10 text-center ">
                <label class="title">{{ $t('coronavirusResult.title') }}</label>
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light result" @click="positive"><b>{{ $t('coronavirusResult.positive') }}</b></button>      
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light result" @click="negative"><b>{{ $t('coronavirusResult.negative') }}</b></button>      
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light result" @click="waiting"><b>{{ $t('coronavirusResult.waiting') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        positive: function() {
            const answer = {
                key: 'coronavirus_test_result',
                value: 'positive'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'ShowHospitals' })
        },
        negative: function() {
            const answer = {
                key: 'coronavirus_test_result',
                value: 'negative'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'WashYourHands' }) 
        },
        waiting: function() {
            const answer = {
                key: 'coronavirus_test_result',
                value: 'waiting for the result'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'ShowHospitals' }) 
        }
    }
}
</script>

<style>
.coronavirus-result .row-img {
    padding-top: 4.5rem;
}

.coronavirus-result .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}

.coronavirus-result .result {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>