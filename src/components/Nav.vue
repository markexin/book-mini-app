<template>
    <div class="nav">
        <div :key="index" v-for="(item,index) in items" :class="{active: index === cur }" >
            <img :src="item.url" alt="">
            <p>{{item.con}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cur:0,
            items:[
                {
                    url:require("@/assets/nav01.png").default,
                    con:'首页'
                },
                {
                    url:require("@/assets/nav02.png").default,
                    con:'卖二手'
                },
                {
                    url:require("@/assets/nav03.png").default,
                    con:'购物车'
                },
                {
                    url:require("@/assets/nav04.png").default,
                    con:'我的'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
/***底部导航***/
     .nav{
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:75px;
        padding-top:15px;
        display: flex;
        background: #fff;
     }
     .nav div{
        flex: 1;
        text-align: center;
     }
     .nav div img{
        width:18px;
        height:18px;
        display: block;
        margin:8px auto;
     }
      .nav div p{
        font-size:14px;
        line-height: 17px;
        color: rgba(4, 8, 23, 0.4);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: center;
      }
      .nav .active p{
          color: rgba(0,0,0,0.8);
      }
</style>
