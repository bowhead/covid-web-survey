<template>
    <div class="container wash-hands">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-26.png">
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-3 col-md-6 text-center text-wrap">
                <label class="info">{{ $t('whasYourHands.info') }}</label>
            </div>
        </div>
        <div class="row pt-4 pb-4">
            <div class="col-12 offset-md-3 col-md-6 text-center text-wrap">
                <label class="info">{{ $t('whasYourHands.info2') }}</label>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light done" @click="done"><b>{{ $t('whasYourHands.done') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        done: function() {
            this.$router.push({ name: 'Advertisement' })        
        }
    }
}
</script>

<style>
.wash-hands .row-img {
    padding-top: 6rem;
}

.wash-hands .row-title {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
}

.wash-hands .info {
    font-weight: 500;
    font-size: 1.1rem;
}

.wash-hands .done {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>