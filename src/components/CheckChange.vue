<template>
    <div class="checkchange">
        <div>{{ num }}</div>
        <div>
            <label for="" @click="handle">全选</label>
        </div>
         <div class="place-name">
            <input type="checkbox"  value="shanghai"  v-model="num">
            <label for="上海">上海</label>
            <input type="checkbox" value="beijing" v-model="num">
            <label for="北京">北京</label>
            <input type="checkbox" value="guangzhou" v-model="num">
            <label for="广州">广州</label>
            <input type="checkbox" value="shenzhen" v-model="num">
            <label for="深圳">深圳</label>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:[],
            labels: [
                {
                    value: 'shanghai',
                    name: '上海'
                }
            ]
        }
    },
    methods: {
        handle(e) {
            if (this.num.length < 4) {
                this.num = ['shanghai','beijing','guangzhou','shenzhen']
            } else {
                this.num = []
            }
            console.log(e.target.value, '<------');
        }
    }
}
</script>
<style lang="scss">
    
</style>