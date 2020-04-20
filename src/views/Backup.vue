<template>
    <div class="container backup">
        <div class="row pt-3">
            <div class="offset-1 col-10 col-backup text-center">
                <label class="info text-justify">{{ $t('backup.info') }}</label> 
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-2 col-md-8 col-backup text-center">
                <label class="info text-justify"><b>{{ $t('backup.warning') }}</b> {{ $t('backup.warningInfo') }}</label>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-10 offset-md-2 col-md-8 col-words">
                <div class="col-12">
                    <div class="row">
                        <div class="col-4 text-center col-word">
                            <label>1</label>
                            <p>{{ words[0] }}</p>                       
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>2</label>
                            <p>{{ words[1] }}</p>
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>3</label>
                            <p>{{ words[2] }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-4 text-center col-word">
                            <label>4</label>
                            <p>{{ words[3] }}</p>                     
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>5</label>
                            <p>{{ words[4] }}</p>
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>6</label>
                            <p>{{ words[5] }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-4 text-center col-word">
                            <label>7</label>
                            <p>{{ words[6] }}</p>                       
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>8</label>
                            <p>{{ words[7] }}</p>
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>9</label>
                            <p>{{ words[8] }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-4 text-center col-word">
                            <label>10</label>
                            <p>{{ words[9] }}</p>                      
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>11</label>
                            <p>{{ words[10] }}</p>
                        </div>
                        <div class="col-4 text-center col-word">
                            <label>12</label>
                            <p>{{ words[11] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-1 col-10 offset-md-2 col-md-8 col-words text-center">
                <label class="address">{{ address }}</label>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light continue" @click="nextPage"><b>{{ $t('general.continue') }}</b></button>               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            nextPage: function() {
                console.log('log')
            }
        },
        computed: {
            words() {
                return this.$store.getters.getWords
            },
            address() {
                return this.$store.getters.getUserAddress
            }
        }
    }
</script>

<style>
.backup .col-backup {
    padding-left: 0;
    padding-right: 0;
}

.backup .info {
    font-size: 1.2rem;
    font-weight: 300;
}

.backup .info b {
    font-weight: bold;
}

.backup .col-words{
    border: 1px solid #c7c7c7;
    border-radius: 10px;
}

.backup .col-word label{
    padding-top: 4px;
    font-weight: 300;
    font-size: 1rem;
    color: #bebebe;
}

.backup .col-word p{
    font-weight: 800;
    font-size: 1.2rem;
    padding-bottom: 1rem;
}

.backup .address {
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 1.3rem;
    -ms-word-break: break-all;
    -ms-word-wrap: break-all;
    -webkit-word-break: break-word;
    -webkit-word-wrap: break-word;
    word-break: break-word;
    word-wrap: break-word;
}

.backup .continue {
    width: 85%;
    min-height: 83px !important;
    background-color: #66c9d8;
    font-weight: 300;
    border-radius: 5px;
}
</style>