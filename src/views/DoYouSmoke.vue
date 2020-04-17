<template>
    <div class="container smoke">
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
            this.$router.push({ name: 'PriorHealthCondition' }) 
        },
        no: function() {
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
    padding-top: 7.5rem;
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