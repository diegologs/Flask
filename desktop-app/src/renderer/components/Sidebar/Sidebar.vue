<template>
  <div class="sidebar_menu">
    <b-tabs v-model="activeTab">
      <b-loading :active.sync="loading" :canCancel="false"></b-loading>
      <b-tab-item label="Tasks">
        <h3 class="subtitle is-6">Tasks to complete</h3>
      
  
        <ul v-if="tasks && tasks.length" class="task_toComplete">
          <li v-for="task of tasks" class="task_item">
            <p v-if="!task.completed">
              <router-link :to="{ name: 'task.show', params: { id: task._id }}">{{task.title}}</router-link>
            </p>
  
          </li>
        </ul>
        <br>
        <h3 class="subtitle is-6">Completed tasks</h3>
       
        <ul v-if="tasks && tasks.length" class="completed_tasks">
          <li v-for="task of tasks" class="task_item">
            <p v-if="task.completed">
              <router-link :to="{ name: 'task.show', params: { id: task._id }}">{{task.title}}</router-link>
            </p>
  
          </li>
        </ul>
      </b-tab-item>
  
      <b-tab-item label="Notes">
        <ul v-if="notes && notes.length" class="task_toComplete">
          <li v-for="note of notes" class="task_item">
          
              <router-link :to="{ name: 'note.show', params: { id: note._id }}">{{note.title}}</router-link>
          
  
          </li>
        </ul> </b-tab-item>
    </b-tabs>
  </div>
</template>

<style scoped src="./style.scss"></style>

<script>
import axios from 'axios';

export default {
  data: () => ({
    tasks: [],
    notes: [],
    errors: [],
    activeTab: 0,
    loading: false

  }),

  mounted() {

    this.$events.on('testEvent', eventData =>

      axios.get(`http://flaskbackend.herokuapp.com/tasks`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.tasks = response.data



        })
        .catch(e => {
          this.errors.push(e)
        })




    );


  },


  // Fetches tasks when the component is created.
  created() {
    var loading = true;
    axios.get(`http://flaskbackend.herokuapp.com/tasks`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.tasks = response.data

        loading = false

      })
      .catch(e => {
        this.errors.push(e)
      })


    axios.get(`http://flaskbackend.herokuapp.com/notes`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.notes = response.data

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