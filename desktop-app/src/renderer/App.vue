<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="columns">
      <div class="column is-3 sidebar">
        <Sidebar v-on:refresh="refreshTasks()"></Sidebar>
      </div>
      <div class="column main_content">
  
        <router-view :key="$route.fullPath"></router-view>
  <small class="version">Version 0.5</small>
      </div>
    </div>
  
  </div>
 

</template>

<script>


export default {
  name: 'flask'
}
</script>

<style scoped lang="scss">

@import "colors";



.sidebar {
  background-color: $dark_bg2;
  color: white; 
  min-height: 100vh;
}

.main_content {
   background-color: $dark_bg !important;
  color: white; 
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 15px;
  min-height: 100vh;
  
}

html {
  height: 100% !important;
}

body {
  height: 100% !important;
}

.version{
  position: fixed;
  bottom: 10px;
  right: 20px;
  font-style: italic;
  background-color: rgba(0,0,0,0.7);
  padding: 5px;
}

h2{
  font-size: 4em !important;
  font-weight: bold !important;
}

h3{

}

</style>
