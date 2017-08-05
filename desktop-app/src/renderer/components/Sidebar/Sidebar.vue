<template>
  <div class="container">
  
    <b-loading :active.sync="loading" :canCancel="false"></b-loading>
  
    
     
        <ul v-if="posts && posts.length">
          <li v-for="post of posts">
            <p>
             <router-link :to="{ name: 'task.show', params: { id: post._id }}">{{post.title}}</router-link>
            </p>
           
          </li>
        </ul>
      
  
  
   
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
    var loading = true;
    axios.get(`http://flaskbackend.herokuapp.com/tasks`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
        console.log(posts)
        loading = false

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