<template>
    <div class="container verify">
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-7 text-center">
                <vm-progress :percentage="65" :show-text="false" :stroke-width="12" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-title">
            <div class="offset-1 col-10 offset-md-3 col-md-6 col-number text-center">
                <label class="title">{{ $t('verify.title') }}</label>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-4 col-md-4 col-number">
                <div class="row">
                    <div class="col-2 col-number">
                        <input v-model="number1" type="text" class="input-field"/>
                    </div>
                    <div class="col-2 col-number">
                        <input v-model="number2" type="text" class="input-field"/>
                    </div>
                    <div class="col-2 col-number">
                        <input v-model="number3" type="text" class="input-field"/>
                    </div>
                    <div class="col-2 col-number">
                        <input v-model="number4" type="text" class="input-field"/>
                    </div>
                    <div class="col-2 col-number">
                        <input v-model="number5" type="text" class="input-field"/>
                    </div>
                    <div class="col-2 col-number">
                        <input v-model="number6" type="text" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-4 col-md-4 col-number">
                <label class="get">{{ $t('verify.didntGet') }}</label> <a href="#">{{ $t('verify.resend') }}</a>
            </div>
        </div>
        <div class="row row-separator">
            <div class="offset-5 col-2">
                <hr>
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 offset-md-4 col-md-4 text-center">
                <button class="btn btn-lg text-light continue" @click="nextPage"><b>{{ $t('general.continue') }}</b></button>               
            </div>
        </div>
    </div>
</template>

<script>
import { generateMnemonic, EthHdWallet } from 'eth-hd-wallet'

export default {
    data() {
        return {
            number1: '',
            number2: '',
            number3: '',
            number4: '',
            number5: '',
            number6: '',
        }
    },
    methods: {
        nextPage: function() {
            const self = this
            const code = this.number1 + this.number2 + this.number3 + this.number4 + this.number5 + this.number6

            window.confirmationResult.confirm(code).then(async function (result) {    
                self.generateWords()

                let token = await result.user.getIdToken(true)
                
                self.$store.commit('SET_AUTHORIZATION', token)

                await self.$store.dispatch('register')
                    .then(() => {
                        self.$router.push({ name: 'Symptoms' })
                    }).catch ((error) => {
                        this.$alert(error)
                    });
            }).catch(function (error) {
                switch (error.code) {
                    case 'auth/invalid-verification-code': 
                        self.$alert('The verification code is invalid')
                        break
                }
            })
        },
        generateWords: function() {
            const mnemonic = generateMnemonic()
            
            this.$store.commit('SET_WORDS', mnemonic.split(' '))

            const wallet = EthHdWallet.fromMnemonic(mnemonic)
            
            wallet.generateAddresses(1)

            const account = {
                address: '0x' + wallet._children[0].wallet.getAddress().toString('hex'),
                publicKey: '0x' + wallet._children[0].wallet.getPublicKey().toString('hex'),
                privateKey: wallet._children[0].wallet.getPrivateKey().toString('hex'),
            }

            this.$store.commit('SET_ACCOUNT', account)
        } 
    },
    mounted() {
        if (window.confirmationResult === undefined) {
            this.$router.push({ name: 'WhatsYourNumber' })
        }
    }
}
</script>

<style>
.verify .row-title {
    padding-top: 4rem;
}

.verify .title {
    font-weight: 800;
    font-size: 1.85rem;
    line-height: 1.3;
}

.verify .col-number {
    padding-right: 5px;
    padding-left: 5px;
}

.verify .input-field {
    border: 1px solid #c2c2c2;
    width: 100%;
    height: 75px;
    border-radius: 5px;
}

.verify .get {
    font-size: 1rem;
}

.verify .row-separator {
    padding-top: 15.5rem;
}

.verify .continue {
    width: 85%;
    min-height: 83px !important;
    background-color: #66c9d8;
    font-weight: 300;
    border-radius: 5px;
}

.verify a {
    font-weight: bold;
    font-size: 1rem;
    color: #66c9d8 !important; 
}
</style>