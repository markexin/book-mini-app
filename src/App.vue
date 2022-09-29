<template>
  <div id="app">
    <router-view> </router-view>
    <!---底部导航  --->
    <Nav v-if="!vhide.includes('Login')"></Nav> 
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue"
export default {
  components:{
    Nav
  },
  data(){
    return{
        vhide: window.location.href //http://localhost:8080/Login  // string ????  indexof  includes

    }
  }
}
</script>
<style>

</style>
