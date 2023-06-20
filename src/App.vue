<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue"
export default {
  name: 'App', 
  comments:{
    TopBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
  width: 1200px;
  margin: 0 auto;
}
</style>
