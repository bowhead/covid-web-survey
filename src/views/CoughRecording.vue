<template>
    <div class="container cough-recording">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="61" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row pt-4">
            <div class="offset-8 col-3 offset-md-7 col-md-2 text-center">
                <button class="btn btn-sm skip" @click="skip">{{ $t('coughRecording.skip') }}</button>  
            </div>
        </div>
        <div class="row pt-1">
            <div class="col-12 text-center">
                <img src="../assets/corona-34.png">
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-12 text-center">
                <label class="title">{{ $t('coughRecording.title') }}</label>
            </div>
        </div>
        <div class="row pt-2">
            <div class="offset-2 col-8 text-center">
                <label class="info">{{ $t('coughRecording.info') }}</label>
            </div>
        </div>
        <div class="row">
            <div class="offset-1 col-10 offset-md-3 col-md-6 info-recording">
                <div class="row">
                    <div class="col-2 text-center" v-if="hasAudio && !recording && !playing">
                        <label class="time">00:00</label>          
                    </div>
                    <div class="col-2 text-center" v-if="recording || !hasAudio">
                        <label class="time">00:{{ time | twoDigits }}</label>
                    </div>
                    <div class="col-2 text-center" v-if="playing">
                        <label class="time">00:{{ timePlay | twoDigits }}</label>
                    </div>
                    <div class="offset-3 col-5 offset-md-5 col-md-3" v-if="hasAudio && playing">
                        <img class="img-wave" src="../assets/wave.png">
                    </div>
                    <div class="offset-8 col-2 text-center" v-if="hasAudio && !playing">
                        <img @click="play" class="play" src="../assets/play.png">        
                    </div>
                    <div class="col-2 text-center" v-if="hasAudio && playing">
                        <img @click="pause" class="play" src="../assets/stop.png">               
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4" v-if="recording">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light stop" @click="stop"><b>{{ $t('coughRecording.stop') }}</b></button>      
            </div>
        </div>
        <div class="row pt-4" v-if="!recording">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light save" @click="record"><b>{{ $t('coughRecording.record') }}</b></button>      
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light save" @click="save"><b>{{ $t('coughRecording.save') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recording: false,
            playing: false,
            hasAudio: false,
            audioChunks: [],
            rec: null,
            sourceAudio: '',
            sound: null,
            time: 15,
            duration: 0,
            timePlay: 0,
            isRunning: false
        }
    },
    methods: {
        record: function() {
            this.time = 15;
            this.duration = 0;
            this.recording = true;
            this.audioChunks = [];
            this.toogleTime();
            this.rec.start();
        },
        stop: function() {
            this.recording = false;
            this.hasAudio = true;
            this.toogleTime();
            this.rec.stop();
        },
        save: async function() {

            let blob = new Blob(this.audioChunks, { type: 'audio/wav' })
            
            let record = this.blobToFile(blob, + new Date() + '.wav')

            await this.$store.dispatch('uploadCoughRecording', record)

            this.$router.push({ name: 'YouHaveDifficultyBreath' })
        },
        blobToFile: function (theBlob, fileName) {
            theBlob.lastModifiedDate = new Date();
            theBlob.name = fileName;
            return theBlob;
        },
        skip: function() {
            this.$router.push({ name: 'YouHaveDifficultyBreath' })
        },
        handlerFunction: function(stream) {
            const mime = ['audio/wav', 'audio/mpeg', 'audio/webm', 'audio/ogg'].filter(MediaRecorder.isTypeSupported)[0];
            this.rec = new MediaRecorder(stream, {
                mimeType: mime
            })
            this.rec.ondataavailable = e => {
                this.audioChunks.push(e.data)
                if (this.rec.state == "inactive") {
                    let blob = new Blob(this.audioChunks, { type: 'audio/wav; codecs=0' })
                    this.sourceAudio = URL.createObjectURL(blob)
                }
            }
        },
        decreaseTimer() {
            this.time = parseInt(this.time) - 1
            this.duration = parseInt(this.duration) + 1
        },
        toogleTime() {
            if (this.isRunning) {
                clearInterval(this.interval);
            } else { 
                this.interval = setInterval(this.decreaseTimer, 1000);
            }
            
            this.isRunning = !this.isRunning           
        },
        increasePlayTime() {
            this.timePlay = parseInt(this.timePlay) + 1
        },
        tooglePlay() {
            if (this.isRunning) {
                clearInterval(this.interval);
            } else { 
                this.interval = setInterval(this.increasePlayTime, 1000);
            }

            this.isRunning = !this.isRunning
        },
        play: function() {
            this.playing = true
            this.sound = new Audio(this.sourceAudio)
            this.tooglePlay()
            this.sound.play()
            this.sound.onended = function() {
                this.pause()
            }.bind(this)
        },
        pause: function() {
            this.playing = false
            this.timePlay = 0
            this.tooglePlay()
            this.sound.pause()
        }
    },
    mounted() {
        navigator.mediaDevices.getUserMedia({ audio: true})
            .then(stream => {
                this.handlerFunction(stream)
            })
    },
    filters: {
        twoDigits (value) {
            return ("0" + value).slice(-2)         
        }
    },
    watch: {
        time: function(val) {
            if (val === 0) {
                this.stop()
            }
        },
        timePlay: function(val) {
            if ((val - 1) === this.duration) {
                this.pause()
            }  
        }
    }
}
</script>

<style>
.cough-recording .skip {
    color: #c2c2c2;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    width: 100%;
}

.cough-recording .title {
    font-weight: 700;
    font-size: 1.6rem;
}

.cough-recording .time {
    color: #c2c2c2;
    font-size: 1.4rem;
    padding-top: 1.2rem;
}

.cough-recording .play {
    padding-top: 1.2rem;
}

.cough-recording .wave {
    padding-top: 1.2rem;
    width: 100%;
}
.cough-recording .info-recording {
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    height: 64px;
}

.cough-recording .img-wave {
    padding-top: .7rem;
    height: 3rem;
}

.cough-recording .save, .stop {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
}

.cough-recording .save {
    background-color: #2bb1c4;
}

.cough-recording .stop {
    background-color: #f44d50;
}

</style>