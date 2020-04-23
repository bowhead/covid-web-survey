<template>
    <div class="container who-are-you">
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-7 text-center">
                <vm-progress :percentage="40" :show-text="false" :stroke-width="12" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col-12 text-center">
                <img src="../assets/whoAreYou.png"> 
            </div>
        </div>
        <div class="row pt-5">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="title">{{ $t('whoAreYou.title') }}</label>   
            </div>
        </div>
        <div class="row pt-2">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="info">{{ $t('whoAreYou.info') }}</label>   
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="field">{{ $t('whoAreYou.name') }}</label>
            </div>
        </div>
        <div class="row">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <input v-model="name" type="text" class="input-field"/>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="field">{{ $t('whoAreYou.birth') }}</label>
            </div>
        </div>
        <div class="row">
            <div class="offset-1 col-3 offset-md-3 col-md-1">
                <input @focus="show" @click="show" v-model="selectedDay" type="text" class="input-field date-field"/>
            </div>
            <div class="col-3 col-md-2">
                <input @click="show" v-model="selectedMonth" type="text" class="input-field date-field"/>
            </div>
            <div class="col-4 col-md-3">
                <input @click="show" v-model="selectedYear" type="text" class="input-field date-field"/>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-5 offset-md-3 col-md-3">
                <div class="row">
                    <div class="col-12">
                        <label class="field">{{ $t('whoAreYou.weight') }}</label>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <input v-model="weight" type="text" class="input-field"/>
                    </div>
                    <div class="col-4 col-percentile text-center" @click="changeWeightMetric">
                        <label class="label-percentile">
                            {{ weightMetric }}      
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-5 col-md-3">
                <div class="row">
                    <div class="col-12">
                        <label class="field">{{ $t('whoAreYou.height') }}</label>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <input v-model="height" type="text" class="input-field"/>
                    </div>
                    <div class="col-4 col-percentile text-center" @click="changeHeightMetric">
                        <label class="label-percentile">
                            {{ heightMetric }}
                        </label> 
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="offset-5 col-2">
                <hr>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col-12 offset-md-4 col-md-4 text-center">
                <button class="btn btn-lg text-light continue" @click="nextPage"><b>{{ $t('general.continue') }}</b></button>               
            </div>
        </div>
        <modal name="birth"
        :adaptive="true"
        height="auto"
        :scrollable="true"
        :reset="true">
            <div class="container">
                <div class="row">
                    <div class="col text-center col-calendar">
                        <FunctionalCalendar v-model="calendarData"
                        :configs="calendarConfigs">
                        </FunctionalCalendar>
                    </div>
                </div>
                <div class="row">
                    <div class="offset-4 col-4 text-center">
                        <button class="btn-lg select-date" @click="cancel"><b>{{ $t('whoAreYou.cancel') }}</b></button>   
                    </div>
                    <div class="col-4 text-center">
                        <button class="btn-lg select-date" @click="accept"><b>{{ $t('whoAreYou.accept') }}</b></button>   
                    </div>
                </div>
            </div>
        </modal>
    </div> 
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar'
import moment from 'moment'

export default {
    data () {
        return {
            name: '',
            weight: '',
            weightMetric: 'lb',
            height: '',
            heightMetric: 'ft',
            selectedDay: '',
            selectedMonth: '',
            selectedYear: '',
            calendarData: {},
            calendarConfigs: {
                sundayStart: false,
                dateFormat: 'yyyy-mm-dd',
                isDatePicker: true,
                isDateRange: false,
                changeMonthFunction: true,
                changeYearFunction: true
            }  
        }
    },
    components: {
        FunctionalCalendar
    },
    computed: {
        requiredFiels() {
            return this.name !== '' && this.weight !== '' && this.height !== '' && this.calendarData.selectedDate
        }
    },
    methods: {
        nextPage: function() {
            if(this.requiredFiels) {

                const register = [
                    { key: 'nickname', data: this.name },
                    { key: 'birthDate', data: (Date.parse(this.calendarData.selectedDate) / 1000) },
                    { key: 'height', data: this.height },
                    { key: 'heightMetric', data: this.heightMetric },
                    { key: 'weight', data: this.weight },
                    { key: 'weightMetric', data: this.weightMetric }
                ]

                this.$store.commit('SET_REGISTER_INFORMATION', register)

                this.$router.push({ name: 'WhatsYourNumber' })  
            } else {
                this.$alert(this.$t('whoAreYou.missingFields'))
            }
        },
        show: function() {
            this.$modal.show('birth')    
        },
        cancel: function() {
            this.$modal.hide('birth')  
        },
        accept: function() {
            let date =  moment(this.calendarData.selectedDate)

            this.selectedDay = date.format('DD')
            this.selectedMonth = date.format('MMMM')
            this.selectedYear = date.format('YYYY')

            this.$modal.hide('birth')
        },
        changeWeightMetric: function() {
            switch(this.weightMetric) {
                case 'lb':
                    this.weightMetric = 'kg'
                    break;
                case 'kg':
                    this.weightMetric = 'lb'
            }
        },
        changeHeightMetric: function() {
            switch(this.heightMetric) {
                case 'ft':
                    this.heightMetric = 'cm'
                    break;
                case 'cm':
                    this.heightMetric = 'ft'
            }
        }
    }
}
</script>

<style>
.who-are-you .title {
    font-weight: 900;
    font-size: 1.8rem;
}

.who-are-you .info {
    font-weight: 400;
    font-size: 1.1rem;
}

.who-are-you .field {
    font-weight: 400;
    font-size: 1rem;  
}

.who-are-you .input-field {
    width: 100%;
    height: 50px;
    border: 1px solid #c2c7c7;
    border-radius: 5px;
    color: #66c9d8;
    font-weight: 800;
    font-size: 1.1rem;
}

.who-are-you .date-field {
    text-align: center;
}

.who-are-you .col-percentile {
    padding-left: 4px;
    padding-right: 4px;
}

.who-are-you .label-percentile {
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    background-color: #162c2f;
    color: white;
    border-radius: 5px;
    font-weight: 400;
    font-size: 1.15rem;
}

.who-are-you .continue {
    width: 85%;
    min-height: 83px !important;
    background-color: #66c9d8;
    font-weight: 300;
    border-radius: 5px;
}

.who-are-you .col-calendar {
    padding-left: 0;
    padding-right: 0;
}

.who-are-you .vfc-main-container {
    box-shadow: none;
}

.who-are-you .select-date {
    width: 85%;
    min-height: 83px !important;
    background-color: white;
    color: #66c9d8;
    font-weight: 300;
    border-radius: 5px;
    border: none;
}
</style>