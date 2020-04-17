<template>
    <div class="container have-cough">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-16.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center">
                <label class="title">{{ $t('youHaveCough.title') }}</label>
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
            this.$store.commit('SET_HAS_SYMPTOMS', true)
            this.$router.push({ name: 'HowCough' })  
        },
        no: function() {
            this.$router.push({ name: 'YouHaveDifficultyBreath' })  
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.have-cough .row-img {
    padding-top: 6rem;
}

.have-cough .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3.2rem;
}

.have-cough .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>