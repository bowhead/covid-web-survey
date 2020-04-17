<template>
    <div class="container how-cough">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-16.png">
            </div>
        </div>
        <div class="row pt-5 pb-1">
            <div class="col-12 text-center">
                <label class="title">{{ $t('howCough.title') }}</label>
            </div>
        </div>
        <div class="row pt-5">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center">
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col text-center option">
                                <input class="option-radio" type="radio"/>
                                <label class="label-option dry">{{ $t('howCough.dry') }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col offset-md-3 col-md-6 text-center option">
                                <input class="option-radio" type="radio"/>
                                <label class="label-option">{{ $t('howCough.productive') }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-next">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light next" @click="nextPage"><b>{{ $t('general.next') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        nextPage: function() {
            this.$router.push({ name: 'CoughRecording' })         
        }
    }
}
</script>

<style>
.how-cough .row-img {
    padding-top: 6.5rem;
}

.how-cough .title {
    font-weight: 700;
    font-size: 1.6rem;
}

.how-cough .option {
    display: flex;
    padding: .25em;
    flex-direction: column-reverse;
    align-items: center;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.2;
}

.how-cough .dry {
    padding-top: 1.2rem;
}

.how-cough .label-option {
    margin-bottom: 20px;
}

.how-cough .row-next {
    padding-top: 5.5rem;
}

.how-cough .next {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}

.how-cough input[type='radio'] {
    -webkit-appearance:none;
    width: 26px;
    height: 26px;
    border: 1px solid darkgray;
    border-radius: 50%;
    outline: none;
    box-shadow:0 0 5px 0px white inset;
}

.how-cough input[type='radio']:hover {
    box-shadow: none;
}

.how-cough input[type='radio']:before {
    content:'';
    display:block;
    width:60%;
    height:60%;
    margin: 20% auto;    
    border-radius: 15px;    
}

.how-cough input[type='radio']:checked:before {
    background:#2bb1c4;
}
</style>