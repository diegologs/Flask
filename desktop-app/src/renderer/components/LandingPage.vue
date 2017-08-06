<template>
 
     <div class="main_page">
    <b-loading :active.sync="loading" :canCancel="false"></b-loading>
 
      <b-icon pack="fa" icon="flask" size="is-large" type="is-primary">
      </b-icon>
      <br>
      <h1 class="title">Select a task to view its details</h1>
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
    this.loading = true;
    axios.get(`http://flaskbackend.herokuapp.com/tasks`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.loading = false
        this.posts = response.data
        console.log(posts)


      })
      .catch(e => {
        this.errors.push(e)
      })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<style scoped>
  .main_page{
    margin-top: 15%;
    text-align: center;
    color: white;
  }

   .main_page h1{

    text-align: center;
    color: white !important;
    font-style: italic;
  }



</style>
