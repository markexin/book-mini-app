<template>
    <div class="tab">
        <NewInput @click='handle'></NewInput>
        <!-- <Button @click="handle1"></Button> -->
        <NavUp></NavUp>
        <CheckChange></CheckChange>
        <div class="content">
            <div class="matter">
                <div class="travel">
                    <h5>Start travel</h5>
                    <ul class="travel-ul">
                        <li>
                            <p>
                                <img class="icon01" src="@/assets/icon01.png" alt="">
                            </p>
                            <h6>Train</h6>
                        </li>
                        <li>
                            <p>
                                <img class="icon02" src="@/assets/icon02.png" alt="">
                            </p>
                            <h6>Hotel</h6>
                        </li>
                        <li>
                            <p>
                               <img class="icon03" src="@/assets/icon03.png" alt="">
                            </p>
                            <h6>Cruise</h6>
                        </li>
                        <li>
                            <p>
                                <img class="icon04" src="@/assets/icon04.png" alt="">
                                </p>
                            <h6>Flight</h6>
                        </li>
                    </ul>
                </div>
                <div class="attrction">
                    <h5>Tourist attrction</h5>
                    <ul class="fclear">
                        <li :key="index" v-for="(i,index) in num">
                            <img :src="i.url" alt="">
                            <div v-if="index < 2">
                                <p>{{i.con}}</p>
                                <p>{{i.price}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Button from '@/components/Button.vue'
import NavUp from '@/components/NavUp.vue'
import NewInput from '@/components/NewInput.vue'
import CheckChange from '@/components/CheckChange.vue'
export default {
    components: {
        // Button,
        NavUp,
        NewInput,
        CheckChange
    },
    data(){
        return {
            cur:0,
            items:[
                {
                    name:'Home'
                },
                {
                    name:'Recom'
                },
                {
                    name:'Around'
                },
                {
                    name:'Activity'
                }
            ],
            num:[
                {
                    url:require('@/assets/img01.png'),
                    con:'Start Travel',
                    price:'$ 260'
                },
                {
                    url:require('@/assets/img02.png'),
                    con:'Holiday tour',
                    price:'$ 260'
                },
                {
                    url:require('@/assets/img03.png'),
                },
                {
                    url:require('@/assets/img01.png'),
                },
                {
                    url:require('@/assets/img02.png'),
                },
                {
                    url:require('@/assets/img03.png'),
                }
            ]
        }
    },
    methods: {
        handle1(value) {
            console.log(value, '<-------------------');
        },
        change(j){
            this.cur = j
        },
        handle(value){
            console.log(value)
        }
    }
}
</script>
<style lang="scss">
    body,html,ul,li,h5,h6,div,p{
        list-style: none;
        padding:0;
        margin:0;
    }
    .tab{
        padding:0 16px;
    }
    .cut{
        display: flex;
    }
    .cut p{
        width:66px;
        flex: 1;
        font-size:14px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0px;
        text-align: center;
        margin-top:23px;
    }
    .cut .active{
        width:66px;
        line-height: 32px;
        background: rgb(4, 8, 23);
        border-radius: 16px;
        color: #fff;
    }
    .travel h5{
        font-size:18px;
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: left;
        margin-top:22px;
    }
    .travel-ul{
        display:flex;
        margin-top:10px;
    }
    .travel-ul li{
        flex: 1;
    }
    .travel-ul li h6{
        font-size:16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 16px;
        font-weight: undefined;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        margin-top:12px;
    }
    .travel-ul li p{
        width:72px;
        height:72px;
        margin:0 auto;;
    }
    .travel-ul li:first-child p{
        background: linear-gradient(rgba(251,81,71,1) 0%,rgba(249,116,66,1) 100%);
    }
    .travel-ul li:nth-child(2) p{
        background: linear-gradient(rgba(37,205,185,1) 0%,rgba(69,224,166,1) 100%);
    }
    .travel-ul li:nth-child(3) p{
        background: linear-gradient(rgba(78,121,251,1) 0%,rgba(100,190,254,1) 100%);
    }
    .travel-ul li:last-child p{
        background: linear-gradient(rgba(30,192,208,1) 0%,rgba(52,226,207,1) 100%);
    }
    .travel-ul li p{
        position: relative;
    }
    .icon01{
        width:25px;
        height:33px;
        display: block;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-16px;
        margin-left:-12px;
    }
    .icon02{
        width:30px;
        height:26px;
        display: block;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-13px;
        margin-left:-15px;
    }
    .icon03{
        width:34px;
        height:34px;
        display: block;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-17px;
        margin-left:-17px;
    }
    .icon04{
        width:25px;
        height:31px;
        display: block;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-15px;
        margin-left:-12px;
    }
    .attrction{
        margin-top:18px;
    }
    .attrction h5{
        font-size:18px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: left;
        margin-bottom:10px;
    }
    .attrction ul{
        height:550px;
        overflow-y: auto;
        // column-count: 2;
        // column-gap: 0;
    }
    .attrction li{
        position: relative;
        float: left;
        border-radius: 8px;
        margin:0 10px 10px 0;
    }
    .attrction li img{
        border-radius:10px;
        width:165px;
        height:191px;
    }
    .attrction li:nth-child(2n){
        float: right;
    } 
    .attrction li div{
        position: absolute;
        bottom:15px;
        right:9px;
        width:139px;
        height:48px;
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(8.154845237731934px);
        padding:7px 0 0 8px;
    }
     .attrction li div p{
        font-size:16px;
        height:24px;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 16px;
        font-weight: undefined;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
     }
</style>