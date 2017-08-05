<template>
  <div class="container">
    <Navbar></Navbar>
  
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p>
          <strong>{{post.title}}</strong>
        </p>
        <p>{{post.text}}</p>
      </li>
    </ul>
   
    <b-icon
        icon="home"
        size="is-medium">
    </b-icon>

  
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data: () => ({
    posts: [],
    showNav: false,
    errors: []
  }),

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://flaskbackend.herokuapp.com/tasks`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
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