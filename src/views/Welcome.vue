<template>
    <div class="container welcome">
        <div class="row pt-4">
            <div class="col-12 text-center">
                <img src="../assets/logoBowhead.png">
            </div>
        </div>
        <div class="row pt-5">
            <div class="offset-1 col-10 offset-md-4 col-md-8 text-left">
                <label class="title">{{ $t('welcome.welcomeTo') }}</label>             
            </div>
        </div>
        <div class="row pt-1">
            <div class="col-12 text-center">
                <label class="second-title">{{ $t('welcome.healthyHabits') }}</label>             
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 text-center">
                <img src="../assets/welcome.png">
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-4 col-md-4 text-center">
                <button class="btn btn-lg text-light create" @click="createAccount"><b>{{ $t('welcome.create') }}</b></button>               
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-5 col-2 text-center">
                <hr>
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 text-center">
                <label class="have-account" @click="signIn">{{ $t('welcome.haveAccount') }} <b>{{ $t('welcome.signIn') }}</b> </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        signIn: function() {
            this.$router.push({ name: 'SignIn' })
        },
        createAccount: function() {
            this.$store.commit('SET_LAST_PAGE', 'Welcome')
            this.$router.push({ name: 'Advertisement' })        
        }
    }
}
</script>

<style>
.welcome .title {
    color: #c2c7c7;
    font-weight: 700;
    font-size: 1.7rem;
}

.welcome .second-title {
    color: black;
    font-weight: 800;
    font-size: 2.65rem;
}

.welcome .create {
    width: 85%;
    min-height: 83px !important;
    background-color: #66c9d8;
    font-weight: 300;
    border-radius: 5px;
}

.welcome hr {
    border: .6px solid #c2c7c7;
}

.welcome .have-account {
    color: #66c9d8;
    font-size: 1.1rem;
    cursor: pointer;
}

.welcome .have-account b {
    text-decoration: underline;
    cursor: pointer;
}
</style>