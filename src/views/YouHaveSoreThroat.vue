<template>
    <div class="container have-sore-throat">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-3.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-2 col-8 text-center ">
                <label class="title">{{ $t('youHaveSoreThroat.title') }}</label>
            </div>
        </div>
        <yes-no class="pt-1"
        @yes="yes"
        @no="no"></yes-no>
    </div>
</template>

<script>
import YesNo from '../components/YesNoButtons.vue'

export default {
    methods: {
        yes: function() {
            this.$store.commit('SET_HAS_SYMPTOMS', true)
            this.$router.push({ name: 'HowSoreThroat' })  
        },
        no: function() {
            this.$router.push({ name: 'YouHaveHeadache' })  
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.have-sore-throat .row-img {
    padding-top: 6rem;
}

.have-sore-throat .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3.2rem;
}

.have-sore-throat .title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.3;
}
</style>