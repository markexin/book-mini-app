<template>
    <div class="login">
        <div class="xiangji"><span class="icon iconfont">&#xe77f;</span></div>
        <form action="">
            <input type="text" v-model="text"  placeholder="E-mail address" id="em"/>
            <div class="envelope"><span class="icon iconfont">&#xe857;</span></div>
            <input type="password" v-model="pawor" placeholder="Password" id="pw"/>
            <div class="key"><span class="icon iconfont">&#xe634;</span></div>
        </form>
        <button class="submit" @click="gotoLink">Sign in</button>
        <div class="facebook-z">
            <button class="facebook">Sign in with Facebook</button>
            <span class="icon iconfont">&#xe652;</span>
        </div>
        <div class="twitter-z">
            <button class="twitter">Sign in with Twitter</button>
            <span class="icon iconfont">&#xe646;</span>
        </div>
        <div class="forgot fclear">
            <a href="javascript:;" class="f-pass">Forgot Password ?</a>
            <a href="javascript:;" class="s-up">New here ? Sign Up</a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            text:'',
            pawor:''
        }
    },
    methods:{
        gotoLink(){
            const _this = this;
            axios({
                method:'get',
                url:'/frontend/public/login.json',
                reposeType:'json'
            })
                .then(function (response) {
                    // console.log(response.data.code)
                    if(response.data.code === 0 ){
                        // console.log(_this)
                        _this.$router.replace('/My')
                    }else{
                        console.log('111')
                    }
                })
        }
    }
    
}
</script>
<style lang="scss">
*{
    box-sizing:border-box;
}
.login{
    background: #666;
    width:100%;
    height:auto;
    padding:50px 0;
}
.xiangji{
    width:100px;
    margin:0 auto 20px auto;
}
.xiangji span{
    font-size: 100px;
    display: block;
}
form{
    width:350px;
    margin: 0 auto;
    position: relative;
}
input{
    display: block;
    width:350px;
    height:50px;
    line-height: 50px;
    border:1px solid #999;
    padding-left:50px;
}
.envelope{
    position: absolute;
    top:9px;
    left:10px;
}
.envelope span, .key span{
    font-size: 30px;
    display: inline-block;
}
.key{
    position: absolute;
    top:56px;
    left:10px;
}
.login button{
    width:350px;
    height:50px;
    line-height: 50px;
    text-align: center;
    margin:0 auto;
    display: block;
    border:none;
    border-radius: 5px;
    
    color: #fff;
}
.login .submit{
    font-size:26px;
    background: orange;
    margin-top:20px;
}
.facebook-z{
    width:350px;
    height:50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    margin:50px auto 20px auto;
}
.facebook-z span, .twitter-z span{
    font-size:30px;
    position: absolute;
    top:2px;
    left:10px;
}
.login .facebook{
    background: blue;
    font-size:20px;
}
.twitter-z{
    width:350px;
    height:50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    margin:0 auto;
    position: relative;
}
.login .twitter{
    background: green;
    font-size:20px;
}

.forgot{
   width:350px;
   margin:50px auto 0 auto;
}
.forgot a{
    text-decoration: none;
    color: #fff;
}
.f-pass{
    float: left;
}
.s-up{
    float: right;
}
</style>