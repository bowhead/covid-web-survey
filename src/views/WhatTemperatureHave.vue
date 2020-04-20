<template>
    <div class="container what-temperature-have">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="52" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
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
                        <scroll-picker v-model="number1" class="flex" :options="numbers"></scroll-picker>
                    </div>
                    <div class="col-2 select-number">
                        <scroll-picker v-model="number2" :options="numbers"></scroll-picker>
                    </div>
                    <div class="col-1 text-center">
                        <label for="" class="dot">.</label>
                    </div>
                    <div class="col-2 select-number">
                        <scroll-picker v-model="number3" :options="numbers"></scroll-picker>
                    </div>
                    <div class="col-3 select-type">
                        <scroll-picker v-model="unit" :options="units"></scroll-picker>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-exact">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center align-items-start">
                <input @click="chageExactTemperature" :checked="exactTemperature" class="option-radio" type="radio" id="no-exact"/>
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
    data() {
        return {
            number1: null,
            number2: null,
            number3: null,
            unit: null,
            numbers: [1,2,3,4,5,6,7,8,9,0],
            units: [{value: 'C', name: 'Cº'}, {value: 'F', name: 'Fº'}],
            exactTemperature: false
        }
    },
    methods: {
        chageExactTemperature: function() {
            this.exactTemperature = !this.exactTemperature
        },
        nextPage: function() {
            if(!this.exactTemperature) {
                const answer = {
                    key: 'temperature_value',
                    value: {
                        value: Number(this.number1.toString() + this.number2.toString() + '.' + this.number3),
                        unit: this.unit
                    }
                }

                this.$store.commit('SET_DATA_SURVEY', answer)
            }

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
    padding-top: 3.2rem;
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