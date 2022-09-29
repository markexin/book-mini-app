<template>
    <div class="distinguis-color">
        <p>区分颜色</p>
        <div class="rock" 
            :key="index" 
            v-for="(item,index) in objTwo"
            :class="{activeOne: cur >= index}" 
            @mouseover="enter(index)" 
            @mouseleave="leave()" >
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cur:0
        }
    },
    methods:{
        enter(index){
            this.cur = index
        },
        leave(){
            
        }
    },
    props:{
        objTwo:Array
    }
}
</script>
<style lang="scss">
.distinguis-color{
    margin:10px 0;
}
.rock{
    width:20px;
    height:20px;
    border:1px solid #999;
    display: inline-block;
    margin:0 3px;
}
.activeOne{
    background: yellow;
}
</style>