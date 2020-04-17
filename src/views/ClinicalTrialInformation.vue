<template>
    <div class="container trial-information">
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
                <input type="email" class="form-control field" :placeholder="$t('clinicalTrialInformation.email')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.firstName')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.lastName')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.city')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.state')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6 text-center">
                <input type="text" class="form-control field" :placeholder="$t('clinicalTrialInformation.country')">
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
export default {
    methods: {
        save: function() {
            this.$router.push({ name: 'ContactAnyone' })
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
    padding-top: 3.6rem;
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