<template>
    <span class="own-btn" @click="handleclick" >on click!{{fullmage}}</span>
    
</template>

<script>
export default {
    methods: {
        handleclick() {
            this.$emit('click', {a:1});
        }
    },
    inject:['num'],
    data(){
        return{
            fullmage:0
        }
    }
}
</script>

<style lang="scss">
.own-btn {
    padding: 10px 20px;
    border-radius: 15px;
    background: blue;
    color: #fff;
}
</style>