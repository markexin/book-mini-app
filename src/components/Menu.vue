<template>
    <div class="menu">
        <p @click="down()">下拉菜单 v</p>
        <div class="menu-con" v-show="menuHide" :key="index" v-for="(item,index) in obj">
            <p @click="options(item.con)">{{item.con}}</p>
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
        down(){
            this.$emit('down')
        },
        options(i){
            this.$emit('options',i)
        }
    },
    props:{
       menuHide: Boolean,
       obj:Array
    }
}
</script>
<style lang="scss">
.menu{
    margin:10px 0;
    color:blue;
}
.menu-con{
    margin:5px 0 0 20px;
    width:50px;
}
.menu-con p{
    font-size:16px;
    line-height: 24px;
    color: #999;
}
</style>