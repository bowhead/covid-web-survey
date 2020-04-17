<template>
    <div class="container contact-anyone">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-20.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="col-12 text-center ">
                <label class="title">{{ $t('contactAnyone.info') }}</label>
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
            this.$router.push({ name: 'SelectDate' })
        },
        no: function() {
            this.$router.push({ name: 'HaveYouTraveled' })
        }
    },
    components: {
        YesNo
    }
}
</script>

<style>
.contact-anyone .row-img {
    padding-top: 6rem;
}

.contact-anyone .row-title {
    padding-top: 2.5rem;
    padding-bottom: 1rem;
}

.contact-anyone .title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
}
</style>