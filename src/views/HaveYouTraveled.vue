<template>
    <div class="container traveled">
        <div class="row row-img">
            <div class="col-12 text-center">
                <img src="../assets/corona-22.png">
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 text-center">
                <label class="title">{{ $t('haveYouTraveled.title') }}</label>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-2 col-10 offset-md-3 col-md-8">
                <div class="row">
                    <div class="col-6 country-option">
                        <input type="checkbox" id="germany">
                        <label for="germany" class="country-name">{{ $t('haveYouTraveled.germany') }}</label>
                    </div>
                    <div class="col-6 country-option">
                        <input type="checkbox" id="spain">
                        <label for="spain" class="country-name">
                            {{ $t('haveYouTraveled.spain') }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-2 col-10 offset-md-3 col-md-8">
                <div class="row">
                    <div class="col-6 country-option">
                        <input type="checkbox" id="iran">
                        <label for="iran" class="country-name">
                            {{ $t('haveYouTraveled.iran') }}
                        </label>
                    </div>
                    <div class="col-6 country-option">
                        <input type="checkbox" id="korea">
                        <label for="korea" class="country-name">
                            {{ $t('haveYouTraveled.korea') }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-2 col-10 offset-md-3 col-md-8">
                <div class="row">
                    <div class="col-6 country-option">
                        <input type="checkbox" id="china">
                        <label for="china" class="country-name">
                            {{ $t('haveYouTraveled.china') }}
                        </label>
                    </div>
                    <div class="col-6 country-option">
                        <input type="checkbox" id="italy">
                        <label for="italy" class="country-name">
                            {{ $t('haveYouTraveled.italy') }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light next" @click="nextPage"><b>{{ $t('general.next') }}</b></button>      
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg none" @click="none"><b>{{ $t('haveYouTraveled.none') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        none: function() {
            this.$router.push({ name: 'TalkDoctor' })
        },
        nextPage: function() {
            this.$store.commit('SET_HAS_TRAVELED', true)
            this.$router.push({ name: 'TalkDoctor' })
        }
    }
}
</script>

<style>
.traveled .row-img {
    padding-top: 4.2rem;
}

.traveled .title {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
}

.traveled .country-name {
    font-size: 1.2rem;
    font-weight: 500; 
}

.traveled .next, .none {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
}

.traveled .next {
    background-color: #2bb1c4;
}

.traveled .none {
    background-color: white;
    color: #2bb1c4;
    border-color: #2bb1c4;
    border: 2px solid;   
}

.country-option input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.country-option label {
  position: relative;
  cursor: pointer;
}

.country-option label:before {
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

.country-option input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 2px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #34ace0;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

</style>