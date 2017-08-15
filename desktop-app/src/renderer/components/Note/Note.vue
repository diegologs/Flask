<template>
    <div class="note">
    
         <pulse-loader :loading="loading" color="#b668ff"></pulse-loader>
    
        <div v-if="note && !loading">
    
            <div class="columns is-gapless is-multiline">
                
                    <h1 class="title">{{note.title}}</h1>
             
               
    
                <div class="column is-8">
                    <ul v-if="note.tags" class="tags">
                        <li v-for="tag of note.tags" class="tag">
    
                            {{tag}}
    
                        </li>
                    </ul>
                </div>
    
                <div class="column date">
                    <span>Created: {{ note.created | moment("from") }}</span>
                    
                </div>
            </div>
            <hr>
            <p class="task_text">
    
                <div v-html="note.text"></div>
    
            </p>
    
        </div>
    
    </div>
</template>

<style scoped src="./style.scss"></style>


<script>
import axios from 'axios';

export default {
    data: () => ({
        note: {},
        errors: [],
        counter: 0,
        loading: false

    }),

    


    // Fetches posts when the component is created.
    mounted() {
        this.loading = true;
        if (typeof this.$route.params.id !== "undefined") {
            var note_id = this.$route.params.id;
        } else {
            note_id = 1;
        }


        axios.get(`http://flaskbackend.herokuapp.com/notes/` + note_id)
            .then(response => {
                // JSON responses are automatically parsed.
                this.loading = false;
                this.note = response.data


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

