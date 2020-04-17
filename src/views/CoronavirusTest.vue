<template>
    <div class="container hcoronavirus-test">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-24.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center ">
                <label class="title">{{ $t('coronavirusTest.title') }}</label>
            </div>
        </div>
        <yes-no class="pt-1"
        @yes="yes"
        @no="no">
        </yes-no>
    </div>
</template>

<script>
import YesNo from '../components/YesNoButtons.vue'

export default {
    methods: {
        yes: function() {
            this.$router.push({ name: 'CoronavirusResult' })
        },
        no: function() {
            this.$router.push({ name: 'FindHospital' })  
        }
    },
    components: {
        YesNo
    },
    computed: {
        percentage () {
            return this.$store.getters.getPercentage;
        }
    }
}
</script>

<style>
.hcoronavirus-test .row-img {
    padding-top: 6rem;
}

.hcoronavirus-test .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3.2rem;
}

.hcoronavirus-test .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>