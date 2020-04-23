<template>
    <div class="container call-emergency">
        <div class="row title">
            <div class="col-12 text-center">
                <img src="../assets/corona-44.png">
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-3 col-md-6 text-center text-wrap">
                <label class="info">{{ $t('callEmergency.info') }}</label>
            </div>
        </div>
        <div class="row row-continue">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light continue" @click="finish"><b>{{ $t('general.continue') }}</b></button>            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        finish: async function() {
            switch (this.lastPage) {
                case 'Advertisement':
                    this.$router.push({ name: 'ShareInformation' })
                    break;
                case 'Symptoms':
                    await this.$store.dispatch('saveSurvey')
                    if (!this.isLogin)
                        await this.$store.dispatch('saveUserData')
                    this.$router.push({ name: 'Backup' })
                    break;
                case '':
                    await this.$store.dispatch('saveSurvey')
                    if (!this.isLogin)
                        await this.$store.dispatch('saveUserData')
                    this.$router.push({ name: 'Backup' })
                    break;
            }
        }
    },
    computed: {
        lastPage () {
            return this.$store.getters.getLastPage;
        },
        isLogin() {
            return this.$store.getters.IsLogin
        }
    }
}
</script>

<style>
.call-emergency .title {
    padding-top: 3rem;
}

.call-emergency .info {
    font-weight: 700;
    font-size: 1.43rem;
    line-height: 1.3;
}

.call-emergency .row-continue {
    padding-top: 9.5rem;
}

.call-emergency .continue {
    width: 90%;
    min-height: 83px !important;
    background-color: #2bb1c4;
    font-weight: 300;
    border-radius: 15px; 
}
</style>