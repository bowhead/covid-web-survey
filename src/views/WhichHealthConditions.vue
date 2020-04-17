<template>
    <div class="container which-conditions">
        <div class="row pt-3">
            <div class="col-12">
                <vm-progress :percentage="10" :text-inside="true" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-6.png">
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 text-center">
                <label class="title">{{ $t('whichHealthConditions.title') }}</label>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center">
                <div class="row">
                    <div class="col-2 offset-md-2 col-md-1 condition-option">
                        <input type="checkbox" id="asthma">
                        <label for="asthma"></label>
                    </div>
                    <div class="col-2 col-md-1">
                        <figure class="figure">
                            <img src="../assets/asthma.png" class="figure-img img-fluid">
                            <figcaption class="figure-caption">{{ $t('whichHealthConditions.asthma') }}</figcaption>
                        </figure>
                    </div>
                    <div class="col-2 offset-md-1 col-md-1 condition-option">
                        <input type="checkbox" id="copd">
                        <label for="copd"></label>
                    </div>
                    <div class="col-2 col-md-1">
                        <figure class="figure">
                            <img src="../assets/copd.png" class="figure-img img-fluid">
                            <figcaption class="figure-caption">{{ $t('whichHealthConditions.copd') }}</figcaption>
                        </figure>
                    </div>
                    <div class="col-2 offset-md-1 col-md-1 condition-option">
                        <input type="checkbox" id="hearth-disease">
                        <label for="hearth-disease"></label>
                    </div>
                    <div class="col-2 col-md-1">
                        <figure class="figure">
                            <img src="../assets/hearth.png" class="figure-img img-fluid">
                            <figcaption class="figure-caption">{{ $t('whichHealthConditions.heart') }}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-1 col-10 offset-md-2 col-md-8 text-center">
                <div class="row">
                    <div class="col-2 offset-md-2 col-md-1 condition-option">
                        <input type="checkbox" id="diabetes">
                        <label for="diabetes"></label>
                    </div>
                    <div class="col-2 col-md-1">
                        <figure class="figure">
                            <img src="../assets/diabetes.png" class="figure-img img-fluid">
                            <figcaption class="figure-caption">{{ $t('whichHealthConditions.diabetes') }}</figcaption>
                        </figure>
                    </div>
                    <div class="col-2 offset-md-1 col-md-1 condition-option">
                        <input type="checkbox" id="hypertension">
                        <label for="hypertension"></label>
                    </div>
                    <div class="col-2 col-md-1" style="padding-left: 0px;">
                        <figure class="figure">
                            <img src="../assets/hypertension.png" class="figure-img img-fluid">
                            <figcaption class="figure-caption" style="font-size: 0.6rem">{{ $t('whichHealthConditions.hypertension') }}</figcaption>
                        </figure>
                    </div>
                    <div class="col-2 offset-md-1 col-md-1 condition-option">
                        <input type="checkbox" id="obesity">
                        <label for="obesity"></label>
                    </div>
                    <div class="col-2 col-md-1">
                        <figure class="figure">
                            <img src="../assets/obesity.png" class="figure-img img-fluid">
                            <figcaption class="figure-caption">{{ $t('whichHealthConditions.obesity') }}</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-1 col-10 col-other">
                <input placeholder="Other">
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light next" @click="nextPage"><b>{{ $t('general.next') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        nextPage: function() {
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
.which-conditions .row-img {
    padding-top: 4rem;
}

.which-conditions .title {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 1.4;
}

.condition-option input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.condition-option label {
  position: relative;
  cursor: pointer;
}

.condition-option label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 1px solid #e3e3e3;
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.condition-option input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 7px;
  height: 15px;
  border: solid #34ace0;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.which-conditions .col-other {
    border: 1px solid #e3e3e3;
    height: 50px;
    border-radius: 10px;
}

.which-conditions .col-other input {
    width: 100%;
    height: 100%;
}

.which-conditions .next {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>