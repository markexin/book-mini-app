<template>
    <div class="order">
        <div class="order-top">
            <img src="@/assets/order-img.png" alt="">
        </div>
        <div class="order-content">
            <div class="order-tab fclear">
                <p class="active">Order to travel</p>
                <p>All</p>
            </div>
            <div class="order-con">
                <div class="flight">
                    <div class="pull-down fclear">
                        <p>All categories</p>
                        <select name="" id=""></select>
                    </div>
                    <ul>
                        <li>
                            <div class="flight-info">
                                <div class="place">
                                    <h6>ORD</h6>
                                    <p>Krabi</p>
                                </div>
                                <div class="fly">
                                    <i class="fly-icon"></i>
                                    <em></em>
                                    <p>2h</p>
                                </div>
                                <div class="airport">
                                    <h6>TIA</h6>
                                    <p>Ko Chang</p>
                                </div>
                            </div>
                            <div class="time fclear">
                                <div class="time-left">
                                    <p>15:30</p>
                                    <span>2021-2-23</span>
                                </div>
                                <div class="time-right">
                                    <p>17:30</p>
                                    <span>2021-2-23</span>
                                </div>
                            </div>
                            <div class="airline fclear">
                                <div class="airline-left">
                                    <i></i>
                                    <p class="name">Eastern airlines</p>
                                </div>
                                <p class="airline-right">$120</p>
                            </div>
                        </li>
                        <li>
                            <div class="flight-info">
                                <div class="place">
                                    <h6>ORD</h6>
                                    <p>Krabi</p>
                                </div>
                                <div class="fly">
                                    <i class="fly-icon"></i>
                                    <em></em>
                                    <p>2h</p>
                                </div>
                                <div class="airport">
                                    <h6>TIA</h6>
                                    <p>Ko Chang</p>
                                </div>
                            </div>
                            <div class="time fclear">
                                <div class="time-left">
                                    <p>15:30</p>
                                    <span>2021-2-23</span>
                                </div>
                                <div class="time-right">
                                    <p>17:30</p>
                                    <span>2021-2-23</span>
                                </div>
                            </div>
                            <div class="airline fclear">
                                <div class="airline-left">
                                    <i></i>
                                    <p class="name">Eastern airlines</p>
                                </div>
                                <p class="airline-right">$120</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Nav></Nav>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    components: {
        Nav
    }
}
</script>
<style lang="scss">
    body,html,ul,li,h5,h6,div,p{
        list-style: none;
        padding:0;
        margin:0;
    }
    .order{
        background: rgb(241, 241, 241);
    }
    .order-top{
        margin-top:-34px;
    }
    .order-top img{
        width:100%;
        height:213px;
        border-radius: 18px;
    }
    .order-content{
        position: relative;
    }
    .order-tab{
        width:324px;
        position: absolute;
        top:-30px;
        left:50%;
        margin-left:-162px;
    }
    .order-tab p{
        color: rgb(0, 0, 0);
        font-family: Inter;
        font-size: 18px;
        font-weight: 500;
        line-height: 52px;
        letter-spacing: 0px;
        text-align: center;
        float: left;
        width:113px;
        height:52px;
        background: rgb(255, 255, 255);
    }
    .order-tab:first-child p{
        width:162px;
    }
    .order-tab .active{
        background: rgb(4, 8, 23);
        color: rgb(255, 255, 255);
    }
    .pull-down{
        padding-top:60px;
        width:136px;
        margin:0 auto;
    }
    .pull-down p{
        float: left;
        margin-right:6px;
    }
    .flight ul{
        height:500px;
        overflow-y:scroll ;
    }
    .flight li{
        background: url(../assets/flight-bg.png) no-repeat;
        background-size: 100% auto;
        width:347px;
        height:266px;
        margin:0 auto;
        padding:26.5px 20px 0 20px;
    }
    .flight-info{
        display: flex;
    }
    .place{
       flex: 1;
    }
    .place h6, .airport h6{
        color: rgb(55, 167, 245);
        font-family: Inter;
        font-size: 20px;
        font-weight: undefined;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
    }
    .place p, .airport p{
        color: rgba(4, 8, 23, 0.4);
        font-family: Inter;
        font-size: 16px;
        font-weight: undefined;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
    }
    .fly{
        flex:1;
        width:130px;
        margin-left:31px;
    }
    .fly .fly-icon{
        background:url(../assets/fly-icon.png) no-repeat;
        background-size: 100% auto;
        width:24px;
        height:11.5px;
        display: block;
        margin:0 auto 2px auto;
    }
    .fly em{
        display: block;
        width:130px;
        background: rgb(196, 196, 196);
        border: 1px solid rgb(196, 196, 196);
    }
    .fly p{
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 16px;
        font-weight: undefined;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        margin-top:16.55px;
    }
    .airport{
        flex: 1;
    }
    .airport h6, .airport p{
        text-align: right;
    }
    .time{
        margin:28px 0 27px 0;
    }
    .time .time-left{
        float: left;
    }
    .time p{
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
    }
    .time span{
        color: rgba(4, 8, 23, 0.4);
        font-family: Inter;
        font-size: 16px;
        font-weight: undefined;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
    }
    .time .time-right{
        float: right;
    }
    .airline{
        width: 328px;
        border-top:1px solid #333;
        padding-top:17px;
        margin:48px 0 0 9px;
    }
    .airline .airline-left{
        float: left;
    }
    .airline-left i{
        background:#999 url(../assets/fly-img.png) no-repeat 3.9px 9.63px;
        background-size: 23.39px 16.4px;
        width:33px;
        height:33px;
        display: block;
        border-radius: 50%;
        float: left;
    }
    .airline-left .name{
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: 0px;
        text-align: left;
        margin-left:8px;
        float: left;
    }
    .airline-right{
        float: right;
        color: rgba(0, 0, 0, 0.8);
        font-family: Inter;
        font-size: 22px;
        font-weight: 500;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: right;
    }
</style>