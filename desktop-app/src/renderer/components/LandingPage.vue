<template>
  <div class="main_page">
   
    <br>
    
    <p>
      <b-icon pack="fa" icon="flask" size="is-large" type="is-primary">
      </b-icon>
      <br>
      <h1 class="title">Select a task to view its details</h1>
    </p>
  
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data: () => ({
    posts: [],
    errors: [],
    

  }),


  // Fetches posts when the component is created.
  created() {
   
  }
}
</script>

<style scoped>
.main_page {
  margin-top: 15%;
  text-align: center;
  color: white;
}

.main_page h1 {

  text-align: center;
  color: white !important;
  font-style: italic;
}
</style>
