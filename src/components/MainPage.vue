<template>
  <div>
     <TopBar/>
     <div class="container">
      <div class="mainBlock">
        <h4 class="h">VueJS ToDo List</h4>
        <hr class="hr">
        <h4 class="h">Main Page</h4>
      </div>
     </div>
    
  </div>
</template>

<script>
 import TopBar from "./TopBar.vue"

export default {
 
  name: 'MainPage',
  components:{
   TopBar
}
}
</script>

<style >
   @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   .mainBlock{
    text-align: center;
    font-size: 40px;
    width: 400px;
    margin: 0 auto;
    color: rgb(39, 39, 39)
   }
   .h{
    margin-top: 40px;
    font-family: 'Roboto', sans-serif;
   }
   
</style>
