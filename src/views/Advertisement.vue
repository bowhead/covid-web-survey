<template>
    <div class="container advertisement">
        <div class="row title">
            <div class="col-12 text-center">
                <img src="../assets/corona.png">
            </div>
        </div>
        <div class="row pt-5">
            <div class="offset-1 col-10 offset-md-4 col-md-4 text-center text-wrap">
                <label class="info">{{ $t('advertisement.info') }}</label>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-4 col-md-4 text-center">
                <button class="btn btn-lg text-light submit" @click="agree"><b>{{ $t('advertisement.submit') }}</b></button>               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        agree: function() {
            switch (this.lastPage) {
                case 'Welcome':
                    this.$store.commit('SET_LAST_PAGE', 'Advertisement')
                    this.$router.push({ name: 'Gender' })
                    break
                default:
                    this.$store.commit('SET_LAST_PAGE', 'Advertisement')
                    this.$router.push({ name: 'Symptoms' })
                    break
            }
        }
    },
    computed: {
        lastPage () {
            return this.$store.getters.getLastPage;
        }
    }
}
</script>

<style>
.advertisement .title {
    padding-top: 4.5rem;
}

.advertisement .info {
    font-weight: 500;
    font-size: 1.2rem;
}

.advertisement .submit {
    width: 80%;
    min-height: 83px !important;
    background-color: #2bb1c4;
    font-weight: 300;
    border-radius: 15px;
}
</style>