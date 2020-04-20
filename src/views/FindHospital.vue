<template>
    <div class="container find-hospital">
        <div class="row pt-3">
            <div class="col-12 offset-md-2 col-md-8">
                <vm-progress :percentage="87" :show-text="false" :stroke-width="18" :strokeColor="'#2bb1c4'"></vm-progress>
            </div>
        </div>
        <div class="row row-title">
            <div class="col-12 text-center text-nowrap">
                <label class="title">{{ $t('findHospital.title') }}</label>
            </div>
        </div>
        <div class="row pt-3">
            <div class="offset-1 col-8 offset-md-3 col-md-5 text-center">
                <input type="text" class="form-control field" :placeholder="$t('findHospital.address')">
            </div>
            <div class="col-2 text-center">
                <button class="btn btn-lg text-light search"><i class="fas fa-search fa-flip-horizontal"></i></button>      
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 col-map">
                <GmapMap
                :center="{lat:20.665805, lng:-103.3937366}"
                :zoom="15">
                </GmapMap>
            </div>
        </div>
        <div class="row row-next pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light done"><b>{{ $t('findHospital.find') }}</b></button>      
            </div>
        </div>
        <div class="row row-next pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light done" @click="done"><b>{{ $t('findHospital.done') }}</b></button>      
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        done: function() {
            if(this.hasSymptoms || this.hasTraveled) {
                this.$router.push({ name: 'ShowHospitals' }) 
            } else {
                this.$router.push({ name: 'WashYourHands' }) 
            }
        }
    },
    computed: {
        hasSymptoms() {
            return this.$store.getters.getHasSymptoms;
        },
        hasTraveled() {
            return this.$store.getters.getHasTraveled;
        }
    }
}
</script>

<style>
.find-hospital .row-title {
    padding-top: 1.5rem;
}

.find-hospital .title {
    font-weight: 700;
    font-size: 1.6rem;
}

.find-hospital .field {
    min-height: 50px;
    border-radius: 15px;
    width: 106% !important;
}

.find-hospital .search {
    background-color: #2bb1c4;
    border-radius: 15px;
    min-height: 50px;
}

.find-hospital .col-map {
    min-height: 325px !important;
}

.find-hospital .col-map .vue-map-container {
    left:0;
    top:0;
    height:100%;
    width:100%;
}

.find-hospital .done {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px;
    background-color: #2bb1c4;
}
</style>