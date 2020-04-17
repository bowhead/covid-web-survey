<template>
    <div class="container prior-health">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-1.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center ">
                <label class="title">{{ $t('priorHealthCondition.title') }}</label>
            </div>
        </div>
        <div class="row">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light yes" @click="yes"><b>{{ $t('general.yes') }}</b></button>      
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg healthy" @click="healthy"><b>{{ $t('priorHealthCondition.iAmHealthy') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        yes: function() {
            this.$router.push({ name: 'WhichHealthConditions' })  
        },
        healthy: function() {
            switch (this.lastPage) {
                case 'WhyFeelUnwell': 
                    this.$router.push({ name: 'YouHaveSoreThroat' }) 
                    break;
                case 'Symptoms':
                    this.$router.push({ name: 'YouWantParticipate' })   
                    break;   
            }
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
.prior-health .row-img {
    padding-top: 7rem;
}

.prior-health .row-title {
    padding-top: 3.5rem;
    padding-bottom: 3rem;
}

.prior-health .title {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 1.3;
}

.prior-health .yes, .healthy {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
}

.prior-health .yes {
    background-color: #2bb1c4;
}

.prior-health .healthy {
    background-color: white;
    color: #2bb1c4;
    border-color: #2bb1c4;
    border: 2px solid;   
}
</style>