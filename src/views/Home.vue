<template>
  <div class="home">
   <hello-world></hello-world>
   <img src="@/assets/logo.png" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
     HelloWorld
  }
}
</script>

<style lang="scss">
.home img {
  width: 72px;
  height: 72px;
}
</style>
