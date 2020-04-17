<template>
    <div class="yes-no-buttons">
        <div class="row pt-1">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg text-light yes" @click="yes"><b>{{ $t('general.yes') }}</b></button>           
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 offset-md-3 col-md-6 text-center">
                <button class="btn btn-lg no" @click="no"><b>{{ $t('general.no') }}</b></button>           
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        yes: function() {
            this.$emit('yes')
        },
        no: function() {
            this.$emit('no')
        }
    }
}
</script>

<style>
.yes-no-buttons .yes, .no {
    width: 80%;
    min-height: 83px;
    font-weight: 300;
    border-radius: 15px; 
}

.yes-no-buttons .yes {
    background-color: #2bb1c4;
}

.yes-no-buttons .no {
    background-color: white;
    color: #e05e4a;
    border-color: #e05e4a;
    border: 2px solid;
}
</style>