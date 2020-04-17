<template>
    <div class="container want-participate">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-40.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center ">
                <label class="title">{{ $t('youWantParticipate.title') }}</label>
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
            this.$store.commit('SET_LAST_PAGE', 'YouWantParticipate')
            this.$router.push({ name: 'ClinicalTrialInformation' })           
        },
        no: function() {
            this.$store.commit('SET_LAST_PAGE', 'YouWantParticipate')
            this.$router.push({ name: 'ContactAnyone' })
        }
    },
    components: {
        YesNo
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
.want-participate .row-img {
    padding-top: 6rem;
}

.want-participate .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3rem;
}

.want-participate .title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
}
</style>