<template>
  <div id="app">
     <Navbar></Navbar>
    <div class="columns">
      <div class="column is-one-quarter">
        <Sidebar></Sidebar>
      </div>
      <div class="column">
         <router-view :key="$route.fullPath"></router-view>
          
      </div>
    </div>
  
   
  </div>
</template>

<script>


export default {
  name: 'flask'
}
</script>

