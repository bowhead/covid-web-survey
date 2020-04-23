<template>
    <div class="container how-fell">
        <div class="row pt-3">
            <div class="col-12">
                <vm-progress :percentage="percentage" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-2.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 text-center">
                <label class="title">{{ $t('howfell.title') }}</label>
            </div>
        </div>
        <div class="row pt-1">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light well" @click="feelWell"><b>{{ $t('howfell.feelWell') }}</b></button>      
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg unwell" @click="feelUnwell"><b>{{ $t('howfell.feelUnwell') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        feelWell: function() {
            const answer = {
                key: 'how_do_you_feel',
                value: 'well'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$store.commit('SET_PERCENTAGE', 15)
            switch (this.lastPage) {
                case '':
                    this.$router.push({ name: 'WashYourHands' })
                    break;
                case 'Symptoms':
                    this.$router.push({ name: 'DoYouSmoke' })   
                    break;   
            }
        },
        feelUnwell: function() {
            const answer = {
                key: 'how_do_you_feel',
                value: 'not well'
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$store.commit('SET_PERCENTAGE', 12)
            switch (this.lastPage) {
                case '':
                    this.$router.push({ name: 'Symptoms' })
                    break;
                case 'Symptoms':
                    this.$store.commit('SET_LAST_PAGE', 'HowDoYouFell')
                    this.$router.push({ name: 'WhyFeelUnwell' })   
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
.how-fell .row-img {
    padding-top: 5rem;
}

.how-fell .row-title {
    padding-top: 3.5rem;
    padding-bottom: 6rem;
}

.how-fell .title {
    font-weight: 700;
    font-size: 1.7rem;
}

.how-fell .well, .unwell {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
}

.how-fell .well {
    background-color: #2bb1c4;
}

.how-fell .unwell {
    background-color: white;
    color: #e05e4a;
    border-color: #e05e4a;
    border: 2px solid;   
}
</style>