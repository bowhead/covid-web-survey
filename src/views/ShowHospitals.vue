<template>
    <div class="container show-hospitals">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="100" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-23.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="col-12 offset-md-3 col-md-6 text-center text-wrap">
                <label class="title">{{ $t('showHospitals.info') }}</label>
            </div>
        </div>
        <div class="row pt-1">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light show"><b>{{ $t('showHospitals.showHospitals') }}</b></button>      
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg no" @click="no"><b>{{ $t('showHospitals.noThanks') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        no: async function() {
            this.$store.dispatch('getSurveyHash')
            await this.$store.dispatch('saveSurvey')
            this.$router.push({ name: 'Backup' })
        }
    }
}
</script>

<style>
.show-hospitals .row-img {
    padding-top: 4.5rem;
}

.show-hospitals .row-title {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
}

.show-hospitals .title {
    font-weight: 500;
    font-size: 1.1rem;
}

.show-hospitals .show, .no {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
}

.show-hospitals .show {
    background-color: #2bb1c4;
    font-size: 1.2rem;
}

.show-hospitals .no {
    background-color: white;
    color: #e05e4a;
    border-color: #e05e4a;
    border: 2px solid;   
}
</style>