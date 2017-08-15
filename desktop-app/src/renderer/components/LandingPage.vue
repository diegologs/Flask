<template>
  <div class="main_page">
    <pulse-loader :loading="loading" color="#b668ff"></pulse-loader>
    <br>
    
    <p v-if="!loading">
      <b-icon pack="fa" icon="flask" size="is-large" type="is-primary">
      </b-icon>
      <br>
      <h1 v-if="!loading" class="title">Select a task to view its details</h1>
    </p>
  
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data: () => ({
    posts: [],
    errors: [],
    loading: false

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
