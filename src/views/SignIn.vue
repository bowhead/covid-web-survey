<template>
    <div class="container sign-in">
        <div class="row pt-5">
            <div class="offset-1 col-10 text-center">
                <img src="../assets/words.png">           
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="title">{{ $t('signIn.title') }}</label>
            </div>
        </div>
        <div class="row pt-3 pb-1">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <label class="info">{{ $t('signIn.info') }}</label>   
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <div class="row">
                    <div class="col-4">
                        <input v-model="model[0].word" type="text" placeholder="1" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[1].word" type="text" placeholder="2" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[2].word" type="text" placeholder="3" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <div class="row">
                    <div class="col-4">
                        <input v-model="model[3].word" type="text" placeholder="4" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[4].word" type="text" placeholder="5" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[5].word" type="text" placeholder="6" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <div class="row">
                    <div class="col-4">
                        <input v-model="model[6].word" type="text" placeholder="7" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[7].word" type="text" placeholder="8" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[8].word" type="text" placeholder="9" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <div class="row">
                    <div class="col-4">
                        <input v-model="model[9].word" type="text" placeholder="10" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[10].word" type="text" placeholder="11" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input v-model="model[11].word" type="text" placeholder="12" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light import" @click="login"><b>{{ $t('signIn.import') }}</b></button>               
            </div>
        </div>
    </div>
</template>

<script>
import { EthHdWallet } from 'eth-hd-wallet'
import { required, minLength } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                model: [
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' },
                    { word: '' }
                ],
                error: null
            }
        },
        validations: {
            word: {
                required,
                minLength: minLength(2)
            }
        },
        methods: {
            async login () {
                const seed = this.model.map(e => e.word).toString().replace(/,/gi, ' ')

                try {
                    const wallet = await EthHdWallet.fromMnemonic(seed)
                    wallet.generateAddresses(1)

                    const account = {
                        address: '0x' + wallet._children[0].wallet.getAddress().toString('hex'),
                        publicKey: '0x' + wallet._children[0].wallet.getPublicKey().toString('hex'),
                        privateKey: wallet._children[0].wallet.getPrivateKey().toString('hex'),
                    }

                    let profile = await this.$store.dispatch('login', account)

                    if (profile[1].substring(0,3) !== '0x0') {
                        let words = this.model.map(e => e.word)
                        this.$store.commit('SET_LOGIN')
                        this.$store.commit('SET_WORDS', words)
                        this.$store.commit('SET_ACCOUNT', account)
                        this.$router.push({ name: 'WhatsYourNumber' })
                    } else {
                        this.$alert(this.$t('signIn.error'))
                    }

                } catch (error) {
                    this.$alert(this.$t('signIn.error'))
                    console.log(error)
                }
            }
        }   
    }
</script>

<style>
.sign-in img {
    width: 205px;
    height: 130px;
}

.sign-in .title {
    font-weight: 700;
    font-size: 1.6rem;
}

.sign-in .info {
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.4;
}

.sign-in .input-field {
    width: 100%;
    height: 50px;
    border: 1px solid #c2c7c7;
    border-radius: 5px;
    text-align: center;
    font-size: 1.1rem;
}

.sign-in .input-field::placeholder {
    text-align: center;
    font-size: 1.2rem;
}

.sign-in .import {
    width: 85%;
    min-height: 83px !important;
    background-color: #66c9d8;
    font-weight: 300;
    border-radius: 5px;
}
</style>