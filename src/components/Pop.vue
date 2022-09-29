<template>
    <div class="pop">
        <button @click="change()">删除</button>
        <div class="content" v-show="showHide">
            <p>这是一段文字，确定要删除吗？</p>
            <div class="but-click fclear">
                <button @click="changeA()">确定</button>
                <button>取消</button>
            </div>
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
        change(){
            this.$emit('change')
        },
        changeA(){
            this.$emit('changeA')
        }
    },
    props:{
        showHide: Boolean
    }

}
</script>
<style lang="scss">
    .content{
        width:300px;
        height:60px;
        background: pink;
        padding:10px;
        margin-top:20px; 
    }
    .but-click{
        margin-top:5px;
    }
    .but-click button{
        float: right;
        margin-left:3px;
        
    }
</style>