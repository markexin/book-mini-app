<template>
    <div class="breadcrumb fclear">
        <div class="breadcrumb_con "  :key="index" v-for="(item ,index) in obj">
            <p @click="total(item.name)">{{item.name}}<span>/</span></p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        total(i){
            this.$emit('total',i)
        }
    },
    props:{
        obj:Array
    }
}
</script>
<style lang="scss">
.breadcrumb_con{
    float: left;
}

</style>