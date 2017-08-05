<template>
    <div class="container">
    
        <b-loading :active.sync="loading" :canCancel="false"></b-loading>
    
        <div v-if="task">
    
            <p>
               
                <strong>{{task.text}}</strong>
            </p>
    
        </div>
    
    </div>
</template>



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
        console.log(this.$route.params.id)
        var loading = true;
        if (typeof this.$route.params.id !== "undefined") {
            var task_id = this.$route.params.id;
        } else {
            task_id = 1;
        }


        axios.get(`http://flaskbackend.herokuapp.com/tasks/` + task_id)
            .then(response => {
                // JSON responses are automatically parsed.
                this.task = response.data
                loading = false;

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