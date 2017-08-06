<template>
  <div class="sidebar_menu">
  
    <b-loading :active.sync="loading" :canCancel="false"></b-loading>
  
    <h3 class="subtitle is-6">Tasks to complete</h3>
     <hr>
    
    <ul v-if="tasks && tasks.length" class="task_toComplete">
      <li v-for="task of tasks" class="task_item">
        <p v-if="!task.completed">
          <router-link :to="{ name: 'task.show', params: { id: task._id }}">{{task.title}}</router-link>
        </p>
  
      </li>
    </ul>
    <br>
      <h3 class="subtitle is-6">Completed tasks</h3>
  <hr>
    <ul v-if="tasks && tasks.length" class="completed_tasks">
      <li v-for="task of tasks" class="task_item">
        <p v-if="task.completed">
          <router-link :to="{ name: 'task.show', params: { id: task._id }}">{{task.title}}</router-link>
        </p>
  
      </li>
    </ul>
  
  </div>
</template>

<style scoped src="./style.css"></style>

<script>
import axios from 'axios';

export default {
  data: () => ({
    tasks: [],
    errors: [],
    loading: false

  }),


  // Fetches tasks when the component is created.
  created() {
    var loading = true;
    axios.get(`http://flaskbackend.herokuapp.com/tasks`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.tasks = response.data
        console.log(tasks)
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