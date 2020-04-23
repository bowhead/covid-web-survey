<template>
    <div class="container how-headache">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="47" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-4.png">
            </div>
        </div>
        <div class="row pt-5 pb-1">
            <div class="col-12 text-center">
                <label class="title">{{ $t('howHeadache.title') }}</label>
            </div>
        </div>
        <div class="row pt-5">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center">
                <div class="row">
                    <div class="col-4">
                        <div class="row">
                            <div class="col text-center option">
                                <input v-model="level" value="mild" class="option-radio" type="radio"/>
                                <label class="label-option">{{ $t('general.mild') }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col text-center option">
                                <input v-model="level" value="moderate" class="option-radio" type="radio"/>
                                <label class="label-option">{{ $t('general.moderate') }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col text-center option">
                                <input v-model="level" value="severe" class="option-radio" type="radio"/>
                                <label class="label-option">{{ $t('general.severe') }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-next">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button :disabled="disable" class="btn btn-lg text-light next" @click="nextPage"><b>{{ $t('general.next') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            level: ''
        }
    },
    computed: {
        disable() {
            return this.level === ''? true : false
        }
    },
    methods: {
        nextPage: function() {
            const answer = {
                key: 'headache_level',
                value: this.level
            }

            this.$store.commit('SET_DATA_SURVEY', answer)
            this.$router.push({ name: 'YouHaveFever' }) 
        }   
    }
}
</script>

<style>
.how-headache .row-img {
    padding-top: 4rem;
}

.how-headache .title {
    font-weight: 700;
    font-size: 1.6rem;
}

.how-headache .option {
    display: flex;
    padding: .25em;
    flex-direction: column-reverse;
    align-items: center;
    font-weight: 500;
    font-size: 1.2rem;
}

.how-headache .label-option {
    margin-bottom: 20px;
}

.how-headache .row-next {
    padding-top: 6.5rem;
}

.how-headache .next {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}

.how-headache input[type='radio'] {
    -webkit-appearance:none;
    width: 26px;
    height: 26px;
    border: 1px solid darkgray;
    border-radius: 50%;
    outline: none;
    box-shadow:0 0 5px 0px white inset;
}

.how-headache input[type='radio']:hover {
    box-shadow: none;
}

.how-headache input[type='radio']:before {
    content:'';
    display:block;
    width:60%;
    height:60%;
    margin: 20% auto;    
    border-radius: 15px;    
}

.how-headache input[type='radio']:checked:before {
    background:#2bb1c4;
}
</style>