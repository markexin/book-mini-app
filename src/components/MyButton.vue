<template>
    <div class="my-button">
        <button @click="dian">click 激活</button>
        <PopUp v-show="arise">
            <table>
                <tr>
                    <th>日期</th>
                    <th>姓名</th>
                    <th>地址</th>
                </tr>
                <tr>
                    <td>2016-05-02</td>
                    <td>王小虎</td>
                    <td>上海普陀区</td>
                </tr>
            </table>
        </PopUp>
    </div>
</template>
<script>
import PopUp from "@/components/PopUp.vue"
export default {
    components:{
        PopUp
    },
    data(){
        return{

        }
    },
    methods:{
        dian(){
            this.$emit('dian')
        }
    },
    props:{
        arise:Boolean
    }

}
</script>
<style lang="scss">

</style>