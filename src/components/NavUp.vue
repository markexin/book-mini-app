<template>
    <div class="navup">
        <div class="cut">
            <p :key="index" 
            v-for="(item ,index) in items" 
            @click="change(index)" 
            :class="{active: cur === index}">{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
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
            ]
        }
    },
    methods: {
        change(j){
            this.cur = j
        }
    }
}
</script>
<style lang="scss">
  
</style>