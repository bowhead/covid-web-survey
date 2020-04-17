<template>
    <div class="container what-temperature-have">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-12.png">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-2 col-8 text-center">
                <label class="title">{{ $t('whatTemperatureHave.title') }}</label>
            </div>
        </div>
        <div class="row">
            <div class="offset-3 col-8 offset-md-3 col-md-8">
                <div class="row">
                    <div class="col-2 select-number">
                        <scroll-picker class="flex" :options="[1, 2, 3, 4, 5]"></scroll-picker>
                    </div>
                    <div class="col-2 select-number">
                        <scroll-picker :options="[1, 2, 3, 4, 5]"></scroll-picker>
                    </div>
                    <div class="col-2 text-center">
                        <label for="" class="dot">.</label>
                    </div>
                    <div class="col-2 select-number">
                        <scroll-picker :options="[1, 2, 3, 4, 5]"></scroll-picker>
                    </div>
                    <div class="col-2 select-type">
                        <scroll-picker :options="['Cº','Fº']"></scroll-picker>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-exact">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center align-items-start">
                <input class="option-radio" type="radio" id="no-exact"/>
                <label for="no-exact" class="form-check-label option-label">{{ $t('whatTemperatureHave.noExact') }}</label>
            </div>
        </div>
        <div class="row row-next pt-2">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light next" @click="nextPage"><b>{{ $t('general.next') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
import "vue-scroll-picker/dist/style.css"
import { ScrollPicker } from "vue-scroll-picker"

export default {
    methods: {
        nextPage: function() {
            this.$router.push({ name: 'YouHaveMuscleAches' })     
        }
    },
    components: {
        ScrollPicker
    }
}
</script>

<style>
.what-temperature-have .row-img {
    padding-top: 6rem;
}

.what-temperature-have .title {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.3;
}

.what-temperature-have .select-number {
    color: #2bb1c4;
    font-size: 1.3rem;
    max-height: 180px;
    width: 100%;
}

.what-temperature-have .select-type {
    font-size: 1.3rem;
    max-height: 180px;
    width: 100%;
}

.what-temperature-have .dot {
    font-size: 3rem;
    font-weight: 900;
    position:absolute;
    bottom: 2.5rem;
}

.what-temperature-have .row-exact {
    padding-top: 4.7rem;
}

.what-temperature-have .option-label {
    padding-left: 20px;
    font-size: 1rem;
    font-weight: bold;
}

.what-temperature-have .next {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}

.what-temperature-have input[type='radio'] {
    -webkit-appearance:none;
    width: 20px;
    height: 20px;
    border: 1px solid darkgray;
    border-radius: 50%;
    outline: none;
    box-shadow:0 0 5px 0px white inset;
}

.what-temperature-have input[type='radio']:hover {
    box-shadow: none;
}

.what-temperature-have input[type='radio']:before {
    content:'';
    display:block;
    width:60%;
    height:60%;
    margin: 20% auto;    
    border-radius: 15px;    
}

.what-temperature-have input[type='radio']:checked:before {
    background:#2bb1c4;
}
</style>