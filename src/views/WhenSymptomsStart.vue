<template>
    <div class="container symptoms-start">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="70" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-30.png">
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 text-center">
                <label class="title">{{ $t('symptomsStart.title') }}</label>
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
                key: 'symptoms_start_date',
                value: dateString
            }

            this.$store.commit('SET_DATA_SURVEY', answer)

           switch (this.lastPage) {
               case 'Symptoms':
                   if(this.hasSymptoms || this.hasTraveled) {
                       this.$router.push({ name: 'ShowHospitals' }) 
                    } else {
                        this.$router.push({ name: 'WashYourHands' }) 
                    }
                   break;
                case 'WhyFeelUnwell':
                    this.$router.push({ name: 'ContactAnyone' }) 
                    break;
           } 
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
                dateFormat: 'yyyy/mm/dd',
                isDatePicker: true,
                isDateRange: false,
                changeMonthFunction: true,
                changeYearFunction: true
            }
        }
    },
    computed: {
        percentage () {
            return this.$store.getters.getPercentage;
        },
        lastPage () {
            return this.$store.getters.getLastPage;
        },
        hasSymptoms() {
            return this.$store.getters.getHasSymptoms;
        },
        hasTraveled() {
            return this.$store.getters.getHasTraveled;
        },
        disabled() {
            return this.calendarData.selectedDate? false : true
        }
    }
}
</script>

<style>
.symptoms-start .row-img {
    padding-top: 2rem;
}

.symptoms-start .title {
    font-weight: 700;
    font-size: 1.4rem;
}

.symptoms-start .vfc-main-container {
    box-shadow: none;
    max-height: 310px !important; 
}

.symptoms-start .next {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>