<template>
    <div class="container smoke">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="35" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-5.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center">
                <label class="title">{{ $t('youSmoke.title') }}</label>
            </div>
        </div>
        <yes-no
        @yes="yes"
        @no="no">
        </yes-no>
    </div>
</template>

<script>
import YesNo from '../components/YesNoButtons.vue'

export default {
    methods:{
        yes: function() {
            const answer = {
                key: 'smoke',
                value: 'yes'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'PriorHealthCondition' }) 
        },
        no: function() {
            const answer = {
                key: 'smoke',
                value: 'no'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'PriorHealthCondition' })
        }
    },
    components: {
        YesNo
    },
    computed: {
        lastPage () {
            return this.$store.getters.getLastPage
        }
    }
}
</script>

<style>
.smoke .row-img {
    padding-top: 5.5rem;
}

.smoke .row-title {
    padding-top: 3.5rem;
    padding-bottom: 6rem;
}

.smoke .title {
    font-weight: 700;
    font-size: 1.7rem;
}
</style>