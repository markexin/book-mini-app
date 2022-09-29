<template>
    <div class="my">
        <div class="my-top">
            <img src="@/assets/order-img.png" alt="">
        </div>
        <div class="my-content">
            <i class="head-photo"></i>
            <p></p>
            <div class="information">
                <ul class="fclear">
                    <li>
                        <h6>Country</h6>
                        <p>8</p>
                    </li>
                    <li>
                        <h6>City</h6>
                        <p>12</p>
                    </li>
                    <li>
                        <h6>Mileage</h6>
                        <p>8.6k</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
    .my-top{
        margin-top:-34px;
    }
    .my-top img{
        width:100%;
        height:213px;
        border-radius: 18px;
    }
    .information li{
        float: left;
        width:33%;
        text-align: center;
    }
</style>