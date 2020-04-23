<template>
    <div class="container gender">
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-7 text-center">
                <vm-progress :percentage="20" :show-text="false" :stroke-width="12" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12 text-center">
                <img src="../assets/gender.png">
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="title">{{ $t('gender.hello') }}</label>   
            </div>
        </div>
        <div class="row pt-2">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="second-title">{{ $t('gender.started') }}</label>
            </div>
        </div>
        <div class="row pt-5">
            <div class="offset-2 col-4 offset-md-3 col-md-3 text-center gender-option">
                <div class="row">
                    <div class="offset-7 col-4 text-center">
                        <input v-model="gender" type="radio" id="male" value="Male">
                        <label class="inline" for="male"></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <img class="gender-icon" src="../assets/male.png">
                    </div>
                </div>
                <div class="row pt-2 pb-4">
                    <div class="col-12 text-center">
                        <label class="gender-label">{{ $t('gender.male') }}</label>
                    </div>
                </div>
            </div>
            <div class="offset-1 col-4 offset-md-1 col-md-3 gender-option">
                <div class="row">
                    <div class="offset-7 col-4 text-center">
                        <input v-model="gender" type="radio" id="female" value="Female">
                        <label class="inline" for="female"></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <img class="gender-icon" src="../assets/female.png">
                    </div>
                </div>
                <div class="row pt-2 pb-4">
                    <div class="col-12 text-center">
                        <label class="gender-label">{{ $t('gender.female') }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gender: ''
        }
    },
    watch: {
        gender: function(val) {
            if (val !== '') {

                const gender = [{
                    'key': 'gender',
                    'data': val
                }]

                this.$store.commit('SET_REGISTER_INFORMATION', gender)

                setTimeout(function () {
                    this.$router.push({ name: 'WhoAreYou' }) 
                }.bind(this), 700);
            }

        }
    }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.gender .title {
    font-weight: 900;
    font-size: 2rem;
    padding-top: 4rem;
}

.gender .second-title {
    font-weight: 500;
    font-size: 1.1rem;  
}

.gender .gender-option {
    background-color: white;
    border: 1px solid #b3b3b38f;
    border-radius: 10px;
}

.gender .gender-icon {
    width: 52px;
    height: 52px;
}

.gender .gender-label {
    font-weight: 800;
    font-size: 1.2rem;
}

.gender input {
    -webkit-appearance:none;
    opacity: 0;
    position: absolute;   
}

.gender input, .gender label {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    cursor: pointer;
}

.gender label {
    position: relative;
}

.gender input + label:before {
    content: '';
    background: #fff;
    border: 1px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    width: 25px;
    height: 25px;
    padding: 3px;
    line-height:15px;
    margin-right: 10px;
    text-align: center;
}

.gender input + label:before {
    border-radius: 50%;
}

.gender input:checked + label:before {
  content: "\f00c";
  font-family: 'FontAwesome';
  color: white;
  background-color: #2bb1c4;
  font-size: 13px;
}

.gender input:focus + label {
  outline: 1px transparent; /* focus style */
}
</style>