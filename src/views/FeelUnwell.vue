<template>
    <div class="container fell-unwell">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-8.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="col-12 text-center text-nowrap">
                <label class="title">{{ $t('feelUnwell.title') }}</label>
            </div>
        </div>
        <div class="row pt-1">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light ill" @click="feelIll"><b>{{ $t('feelUnwell.feelIll') }}</b></button>      
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg tired" @click="tired"><b>{{ $t('feelUnwell.tired') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        feelIll: function() {
            this.$store.commit('SET_LAST_PAGE', 'WhyFeelUnwell')
            this.$router.push({ name: 'DoYouSmoke' })  
        },
        tired: function() {
            this.$store.commit('SET_LAST_PAGE', 'WhyFeelUnwell')
            this.$router.push({ name: 'DoYouSmoke' })  
        }
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
.fell-unwell .row-img {
    padding-top: 7.5rem;
}

.fell-unwell .row-title {
    padding-top: 3.5rem;
    padding-bottom: 6rem;
}

.fell-unwell .title {
    font-weight: 700;
    font-size: 1.7rem;
}

.fell-unwell .ill, .tired {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
}

.fell-unwell .ill {
    background-color: #2bb1c4;
}

.fell-unwell .tired {
    background-color: white;
    color: #2bb1c4;
    border-color: #2bb1c4;
    border: 2px solid;   
}
</style>