<template>
    <div class="container select-date">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="83" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-21.png">
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 text-center">
                <label class="title">{{ $t('general.selectDate') }}</label>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-2 col-md-8">
                <FunctionalCalendar v-model="calendarData"
                :configs="calendarConfigs">
                </FunctionalCalendar>
            </div>
        </div>
        <div class="row row-next pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button :disabled="disabled" class="btn btn-lg text-light next" @click="nextPage"><b>{{ $t('general.next') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar'

export default {
    methods: {
        nextPage: function() {
            let date = new Date(this.calendarData.selectedDate)
            let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];

            const answer = {
                key: 'have_been_around_ill_date',
                value: dateString
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'HaveYouTraveled' })  
        }
    },
    computed: {
        disabled() {
            return this.calendarData.selectedDate? false : true
        }
    },
    components: {
        FunctionalCalendar
    },
    data() {
        return {
            calendarData: {},
            calendarConfigs: {
                sundayStart: false,
                dateFormat: 'dd/mm/yyyy',
                isDatePicker: true,
                isDateRange: false,
                changeMonthFunction: true,
                changeYearFunction: true
            }
        }
    }
}
</script>

<style>
.select-date .row-img {
    padding-top: 1.5rem;
}

.select-date .title {
    font-weight: 700;
    font-size: 1.4rem;
}

.select-date .vfc-main-container {
    box-shadow: none;
    max-height: 310px !important; 
}

.select-date .next {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>