<template>
    <div class="container wash-hands">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="100" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-26.png">
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-3 col-md-6 text-center text-wrap">
                <label class="info">{{ $t('whasYourHands.info') }}</label>
            </div>
        </div>
        <div class="row pt-4 pb-4">
            <div class="col-12 offset-md-3 col-md-6 text-center text-wrap">
                <label class="info">{{ $t('whasYourHands.info2') }}</label>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light done" @click="done"><b>{{ $t('whasYourHands.done') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        done: async function() {
            await this.$store.dispatch('saveSurvey')
            if (!this.isLogin)
                await this.$store.dispatch('saveUserData')
            this.$router.push({ name: 'Backup' })        
        }
    },
    computed: {
        isLogin() {
            return this.$store.getters.IsLogin
        }
    }
}
</script>

<style>
.wash-hands .row-img {
    padding-top: 4.5rem;
}

.wash-hands .row-title {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
}

.wash-hands .info {
    font-weight: 500;
    font-size: 1.1rem;
}

.wash-hands .done {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>