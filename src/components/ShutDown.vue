<template>
    <div class="shutdown">
        <button @click="ashore(1)" :class="{active: isActive === 1}">{{action}}</button>
        <div class="shutdown-con" v-show="shutHide" >
            <h6>提示</h6>
            <p>{{con}}</p>
            <i @click="close()">✖️</i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cur:0,
            isActive:0,
            timer:null,
            action:'会自动关闭',
            con:'这是一条会自动关闭的消息'
        }
    },
    methods:{
        ashore(i){
            this.isActive = i;
            this.$emit('ashore');
            this.timer = setInterval(() => {
                this.$emit('close');
                // this.shutHide = false
            },3000)
        },
        close(){
            this.isActive = 0;
            this.$emit('close')
        }
    },
    props:{
        shutHide: Boolean
    }
}
</script>
<style lang="scss">
.shutdown{
    margin:10px 0;
}
.shutdown-con{
    width:300px;
    height:auto;
    background: blue;
    color: #fff;
    padding:10px 0 10px 10px;
    position: relative;
    margin-top:10px;
}
.shutdown .active{
    border:1px solid rgba(3, 204, 230, 0.8);
    color: rgba(3, 204, 230, 0.9);
    background: #999;
}
.shutdown-con h6{
    font-size:24px;
    line-height: 28px;
}
.shutdown-con p{
    font-size:18px;
    line-height: 24px;
}
.shutdown-con i{
    position: absolute;
    top:5px;
    right:5px;
    background: #fff;
}
</style>