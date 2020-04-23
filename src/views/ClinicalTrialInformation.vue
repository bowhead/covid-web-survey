<template>
    <div class="container trial-information">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="42" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-title">
            <div class="col-12 text-center">
                <label class="title">{{ $t('clinicalTrialInformation.title') }}</label>              
            </div>
        </div>
        <div class="row pt-2">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <label class="info text-justify">{{ $t('clinicalTrialInformation.info') }}</label>       
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6  text-center">
                <input v-model="pacient.email" type="email" class="form-control field" :placeholder="$t('clinicalTrialInformation.email')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input v-model="pacient.first_name" type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.firstName')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input v-model="pacient.last_name" type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.lastName')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input v-model="pacient.city" type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.city')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input v-model="pacient.state" type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.state')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input v-model="pacient.country" type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.country')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light save" @click="save"><b>{{ $t('general.save') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            pacient: {
                email: '',
                first_name: '',
                last_name: '',
                city: '',
                state: '',
                country: ''
            }
        }
    },
    validations: {
        pacient: {
            email: {
                required,
                email
            },
            first_name: {
                required
            },
            last_name: {
                required
            },
            city: {
                required
            },
            state: {
                required
            },
            country: {
                required
            }
        }
    },
    methods: {
        save: function() {
            if (this.$v.$invalid) {
                this.$alert(this.$t('general.missingFields'))
            } else {
                const answer = {
                    key: 'clinical_trial_personal_information',
                    value: this.pacient
                }
                
                this.$store.commit('SET_DATA_SURVEY', answer)

                this.$router.push({ name: 'ContactAnyone' })
            }
        }
    },
    computed: {
        percentage () {
            return this.$store.getters.getPercentage;
        },
        lastPage () {
            return this.$store.getters.getLastPage;
        }
    }
}
</script>

<style>
.trial-information .row-title {
    padding-top: 1.3rem;
}

.trial-information .title {
    font-weight: 700;
    font-size: 1.6rem;
}

.trial-information .info {
    font-weight: bold;
}

.trial-information .field {
    min-height: 50px;
    border-radius: 15px;
}

.trial-information .save {
    width: 85%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>