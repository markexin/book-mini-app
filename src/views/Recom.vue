<template>
    <div class="recom">
        <Pop @change="seek()" :show-hide="show" @changeA="seekOne()"></Pop>
        <ShutDown @ashore="little()" @close="big()" :shut-hide="reveal"></ShutDown>
        <BreadCrumb :obj="objCon" @total="dian"></BreadCrumb>
        <Menu @down="cldown()" :menu-hide="showOne" :obj="objContent" @options="menuValue"></Menu>
        <DistinguisColor :objTwo="nullObj"></DistinguisColor>
        <MyButton :arise="showButton" @dian="clickdian()"></MyButton>

        <Beauty></Beauty>

        <div class="recom-top ">
            <div class="recom-topleft">
                <input type="serch" class="seek">
                <i class="lens"></i>
            </div>
            <img src="@/assets/bell.png" alt="" class="bell">
        </div>
       <NavUp></NavUp>  
       <div class="recommend">
           <h5>Recommend</h5>
           <ul>
               <li :key="index" v-for="(item,index) in items">
                   <img :src="item.url" alt="" />
                   <p>{{item.name}}</p>
               </li>
           </ul>
       </div>
       <div class="popular">
           <h5>Popular routes</h5>
           <ul>
               <li :key="index" v-for="(i,index) in obj">
                   <img :src="i.url" alt="" />
                   <div class="popular-con">
                       <h6>{{i.name}}</h6>
                       <p>{{i.con}}</p>
                   </div>
               </li>
           </ul>
       </div>
       <div class="routes">
           <h5>Routes</h5>
           <div class="routes-right">
               <img src="@/assets/routes-img.png" alt="">
               <div class="routes-con">
                   <h6>Trinidad</h6>
                   <p>Cuba, across the sea from Florida, is like a "crocodile" lying in the South Gate of the United States. </p>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import NavUp from "@/components/NavUp.vue"
import Pop from "@/components/Pop.vue"
import ShutDown from "@/components/ShutDown.vue"
import BreadCrumb from "@/components/BreadCrumb.vue"
import Menu from "@/components/Menu.vue"
import DistinguisColor from "@/components/DistinguisColor.vue"
import MyButton from "@/components/MyButton.vue"
import Beauty from "@/components/Beauty.vue"
export default {
    components: {
        NavUp,
        Pop,
        ShutDown,
        BreadCrumb,
        Menu,
        DistinguisColor,
        MyButton,
        Beauty
    },
     data(){
         return{
            cur:0,
            items:[
                {
                    name:'Koh',
                    url:require("@/assets/recom-img01.png")
                },
                {
                    name:'York',
                    url:require("@/assets/recom-img02.png")
                },
                {
                    name:'York',
                    url:require("@/assets/recom-img03.png")
                }
            ],
            obj:[
                {
                    name:'kumtag desert',
                    con:'20 km from the city center',
                    url:require("@/assets/popular-img01.png")
                },
                {
                    name:'Mingsha Mountain',
                    con:'100 km from the city center',
                    url:require("@/assets/popular-img02.png")
                }
            ],
            show:false,
            reveal:false,
            objCon:[
               
                {
                    name:'首页'
                },
                
                 {
                    name:'活动管理'
                },
                {   name:'活动列表'
                },
                {
                    name:'活动详情'
                }
            
            ],
            showOne:false,
            objContent:[
                {
                    con:'黄金糕'
                },
                {
                    con:'狮子头'
                },
                {
                    con:'螺蛳粉'
                },
                {
                    con:'双皮奶'
                },
                {
                    con:'蚵仔煎'
                }
            ],
            nullObj:[
                {

                },
                {

                },
                {
                    
                },
                {

                },
                {

                }
            ],
            showButton:false,
            num:0
         }
     },
     methods: {
        seek(){
            this.show = true
        },
        seekOne(){
            this.show = false
        },
        little(){
            this.reveal = true
        },
        big(){
            this.reveal = false
        },
        dian(value){
            alert(value)
        },
        cldown(){
            this.showOne = true
        },
        menuValue(value){
            alert(value)
        },
        clickdian(){
            this.showButton = true
        }
     },
     provide(){
         return{
             num:this.num
         }
     }
}
</script>
<style lang="scss">
.recom{
    background: #fff;
}
input{
    border:none;
    margin:0;
    padding:0;
}

.fclear:before,
.fclear:after {
    content: "";
    display: table;
    clear: both;
}
.fclear {
    zoom: 1;
    clear: both;
}
.recom{
    padding:14px 0 0 16px;
}
.recom-top{
    padding-right:16px;
    display: flex;
}
.recom-topleft{
    position: relative;
    flex: 1;
}
.seek{
    width:294px;
    height:40px;
    line-height: 40px;
    background: url(../assets/seek-bg.png) no-repeat;
    background-size: 100% auto;
}
.lens{
    background: url(../assets/lens.png) no-repeat;
    background-size: 100% auto;
    width:18px;
    height:18px;
    display: block;
    position: absolute;
    top:10px;
    left:20px;
    
}
.bell{
    width:32px;
    height:32px;
    display: block;
    margin-top:6px;
}
.recommend{
    margin:30px 0 23px 0;
}
.recommend h5, .popular h5{
    color: rgba(0, 0, 0, 0.8);
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom:6px;
}
.recommend ul, .popular ul{
    display: flex;
    overflow-x: scroll;
}
.recommend li{
    flex:1;
    width:145px;
    height:134px;
    position: relative;
    margin-right:20px;
}
.recommend li img{
    border-radius: 15px;
    width:145px;
    height:134px;
}

.recommend li p{
    position:absolute;
    bottom:6px;
    right:5px;
    width:56px;
    height:24px;
    font-size:14px;
    color: rgba(0,0,0,.8);
    line-height: 24px;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
}
.popular li{
    background: rgb(255, 255, 255);
    border: 1px solid rgb(150, 150, 150);
    border-radius: 8px;
    margin-right:12px;
}
.popular li img{
    width:287px;
    height:188px;
    display: block;
}
.popular-con{
    padding:8px 0 12px 8px;
}
.popular-con h6{
    color: rgba(0, 0, 0, 0.8);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom:5px;
}
.popular-con p{
    color: rgba(4, 8, 23, 0.4);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
}
.routes{
    margin-top:38px;
}
.routes h5{
    color: rgba(0, 0, 0, 0.8);
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom:10px;
}
.routes-right{
    display: flex;
}
.routes-right img{
    flex: 1;
    width:112px;
    height:112px;
    display: block;
    margin-right:16px;
}
.routes-con h6{
    font-family: Inter;
    font-size: 16px;
    font-weight: undefined;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    padding:8px 0;
}
.routes-con p{
    width:214.63px;
    color: rgba(0, 0, 0, 0.8);
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
}
</style>