<template>
    <div class="task">
    
        <pulse-loader :loading="loading" color="#b668ff"></pulse-loader>
        <div v-if="task && !loading">
    
            <div class="columns is-gapless is-multiline">
                <div class="column is-8">
                    <h1 class="title">{{task.title}}
                        <b-icon v-if="task.priority <= 1" pack="fa" icon="circle" type="is-primary">
                        </b-icon>
    
                        <b-icon v-if="task.priority == 2" pack="fa" icon="circle" type="is-success">
                        </b-icon>
    
                        <b-icon v-if="task.priority == 3" pack="fa" icon="circle" type="is-warning">
                        </b-icon>
    
                        <b-icon v-if="task.priority >= 4" pack="fa" icon="circle" type="is-danger">
                        </b-icon>
    
                        <b-dropdown>
                            <p class="" slot="trigger">
                                <b-icon pack="fa" icon="bars" type="is-primary">
                                </b-icon>
                            </p>
    
                            <b-dropdown-option @click="isComponentModalActive = true">Edit
                                <b-icon pack="fa" icon="pencil" type="is-primary">
                                </b-icon>
                            </b-dropdown-option>
                            <b-dropdown-option v-on:click="trash">Delete
                                <b-icon pack="fa" icon="trash" type="is-danger">
                                </b-icon>
                            </b-dropdown-option>
    
                        </b-dropdown>
    
                    </h1>
                </div>
                <div class="column task_completed">
    
                    <a v-on:click="uncomplete">
                        <b-icon v-if="task.completed" pack="fa" icon="check-circle" size="is-large" type="is-success"></b-icon>
                    </a>
                    <a v-on:click="complete">
                        <b-icon v-if="!task.completed" pack="fa" icon="check-circle" size="is-large" type="is-primary">
    
                        </b-icon>
                    </a>
                </div>
    
                <div class="column is-8">
    
                    <ul v-if="task.tags" class="tags">
                        <li v-for="tag of task.tags" class="tag">
    
                            {{tag}}
    
                        </li>
                    </ul>
    
                </div>
    
                <div class="column date">
                    <span v-if="task.completed">Completed {{ task.complete_date | moment("from") }}</span>
                    <span v-if="!task.completed">Created {{ task.created | moment("from") }}</span>
                </div>
            </div>
            <hr>
            <p class="task_text">
    
                <b-modal :active.sync="isComponentModalActive" has-modal-card>
    
                    <EditForm v-bind="formProps"></EditForm>
                </b-modal>
    
                <div v-html="task.text"></div>
    
            </p>
    
        </div>
    
    </div>
</template>

<style scoped src="./style.scss"></style>


<script>
import axios from 'axios';


export default {
    data: () => ({
        task: {},
        errors: [],
        counter: 0,
        loading: false,
        isComponentModalActive: false,
        formProps: {

            title: '',
            text: '',
            tags: '',
            priority: ''
        }

    }),
    methods: {
        complete: function (event) {

            if (typeof this.$route.params.id !== "undefined") {
                var task_id = this.$route.params.id;
            } else {
                task_id = 1;
            }



            axios.put(`http://flaskbackend.herokuapp.com/tasks/` + task_id + "/completed")
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.loading = false;
                    this.task = response.data
                    this.$events.emit('testEvent', "Hiiiiiiii");
                    this.$toast.open({
                        message: 'Task marked as completed. Well done!',
                        type: 'is-success'
                    })


                })
                .catch(e => {
                    this.errors.push(e)
                })

        },

        uncomplete: function (event) {

            if (typeof this.$route.params.id !== "undefined") {
                var task_id = this.$route.params.id;
            } else {
                task_id = 1;
            }



            axios.put(`http://flaskbackend.herokuapp.com/tasks/` + task_id + "/uncompleted")
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.loading = false;
                    this.task = response.data
                    this.$events.emit('testEvent', "Hiiiiiiii");


                })
                .catch(e => {
                    this.errors.push(e)
                })

        },



        trash: function (event) {

            var task_id;
            typeof this.$route.params.id !== "undefined" ? task_id = this.$route.params.id : task_id = 1;



            this.$dialog.confirm({
                title: 'Deleting task',
                message: 'Are you sure you want to <strong>delete</strong> this task? This action cannot be undone.',
                confirmText: 'Delete task',
                type: 'is-danger',
                hasIcon: true,
                onConfirm: () => {
                    axios.delete(`http://flaskbackend.herokuapp.com/tasks/` + task_id)
                        .then(response => {
                            // JSON responses are automatically parsed.
                            this.loading = false;
                            this.$events.emit('testEvent', "Hiiiiiiii");

                            this.$toast.open({
                                message: 'Task deleted',
                                type: 'is-danger'
                            });

                            this.$router.push({ path: '/' });


                        })
                        .catch(e => {
                            this.errors.push(e)
                        })
                }
            })


        },

        edit: function (event) {

            if (typeof this.$route.params.id !== "undefined") {
                var task_id = this.$route.params.id;
            } else {
                task_id = 1;
            }




        }


    },





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
                this.task = response.data;
                this.formProps.title = this.task.title;
                this.formProps.text = this.task.text;
                this.formProps.tags = this.task.tags.toString();
                this.formProps.priority = this.task.priority;


            })
            .catch(e => {
                this.errors.push(e)
            })

        this.$events.on('refreshTask', eventData =>


            axios.get(`http://flaskbackend.herokuapp.com/tasks/` + task_id)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.loading = false;
                    this.task = response.data;
                    this.formProps.title = this.task.title;
                    this.formProps.text = this.task.text;
                    this.formProps.tags = this.task.tags.toString();
                    this.formProps.priority = this.task.priority;


                })
                .catch(e => {
                    this.errors.push(e)
                })



        );


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

