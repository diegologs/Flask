<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="columns">
      <div class="column is-3 sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="column main_content">
  
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

<style scoped lang="scss">

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$dark_bg: #2E3440;
$dark_bg2: #3B4252;

$primary: #b668ff;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles





@import "~bulma";
@import "~buefy/src/scss/buefy";

$navbar-background-color: rgb(0,0,0);

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


</style>
