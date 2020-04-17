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
                        <input type="text" placeholder="1" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="2" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="3" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <div class="row">
                    <div class="col-4">
                        <input type="text" placeholder="4" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="5" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="6" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <div class="row">
                    <div class="col-4">
                        <input type="text" placeholder="7" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="8" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="9" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-3 col-md-6">
                <div class="row">
                    <div class="col-4">
                        <input type="text" placeholder="10" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="11" class="input-field"/>
                    </div>
                    <div class="col-4">
                        <input type="text" placeholder="12" class="input-field"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light import"><b>{{ $t('signIn.import') }}</b></button>               
            </div>
        </div>
    </div>
</template>

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