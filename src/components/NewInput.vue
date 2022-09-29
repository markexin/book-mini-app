<template>
    <div class="newinput">
        <input type="text" @input="handleclick"  v-model="text">
    </div>
</template>
<script>
export default {
    data(){
        return{
            text: ''
        }
    },
    methods:{
        handleclick(){
            this.$emit('click', this.text)
        }
    }
    
}
</script>
<style lang="scss">
   .newinput input{
       width:200px;
       height:30px;
       border:1px solid #999;
       margin:30px auto;
   }
</style>