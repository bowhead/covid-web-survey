<template>
    <div class="container coronavirus-result">
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
            this.$router.push({ name: 'ShowHospitals' })
        },
        negative: function() {
            this.$router.push({ name: 'WashYourHands' }) 
        },
        waiting: function() {
            this.$router.push({ name: 'ShowHospitals' }) 
        }
    }
}
</script>

<style>
.coronavirus-result .row-img {
    padding-top: 6rem;
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