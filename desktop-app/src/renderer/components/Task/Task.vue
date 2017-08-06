<template>
    <div class="task">
    
        <b-loading :active.sync="loading" :canCancel="false"></b-loading>
    
        <div v-if="task">
    
            <div class="columns is-gapless is-multiline">
                <div class="column is-7">
                    <h1 class="title">{{task.title}}</h1>
                </div>
                <div class="column task_completed">
    
                    <b-icon v-if="task.completed" pack="fa" icon="check-circle" size="is-large" type="is-success"></b-icon>
                    <b-icon v-if="!task.completed" pack="fa" icon="check-circle" size="is-large">
                    </b-icon>
                </div>
  
                <div class="column is-7">
                    <ul v-if="task.tags" class="tags">
                        <li v-for="tag of task.tags" class="tag">
    
                            {{tag}}
    
                        </li>
                    </ul>
                </div>
    
                <div class="column date">
                    <span v-if="task.complete_date">Completed {{ task.complete_date | moment("from") }}</span>
                    <span v-if="!task.complete_date">Created {{ task.created | moment("from") }}</span>
                </div>
            </div>
            <hr>
            <p class="task_text">
    
                {{task.text}}
            </p>
    
        </div>
    
    </div>
</template>

<style scoped src="./style.css"></style>


<script>
import axios from 'axios';

export default {
    data: () => ({
        task: {},
        errors: [],
        loading: false

    }),

    // Fetches posts when the component is created.
    mounted() {
        this.loading = true;
        if (typeof this.$route.params.id !== "undefined") {
            var task_id = this.$route.params.id;
        } else {
            task_id = 1;
        }


        axios.get(`http://flaskbackend.herokuapp.com/tasks/` + task_id)
            .then(response => {
                // JSON responses are automatically parsed.
                this.loading = false;
                this.task = response.data


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

