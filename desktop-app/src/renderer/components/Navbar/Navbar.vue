<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
    
            <a class="navbar-item logo" href="/">
                <b-icon pack="fa" icon="flask">
                </b-icon> Flask
            </a>
    
            <div class="navbar-burger burger" data-target="navMenuExample" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    
        <div id="navMenuExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
    
            <div class="navbar-end">
                <!--   <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
                            <b-icon pack="fa" icon="tasks">
                            </b-icon> Tasks
                        </a>
                        <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
                            <b-icon pack="fa" icon="sticky-note">
                            </b-icon> Notes
                        </a>
            
                        <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
                            <b-icon pack="fa" icon="calendar">
                            </b-icon> Calendar
                        </a> -->
    
                <b-dropdown class="navbar-item is-hidden-desktop-only" custom paddingless position="is-bottom-left">
                    <p class="" slot="trigger">
                        <b-icon pack="fa" icon="plus-circle" size="is-large">
                        </b-icon>
                    </p>
    
                    <b-dropdown-option @click="isComponentModalActive = true">Create task
                        <b-icon pack="fa" icon="tasks" type="is-primary">
                        </b-icon>
                    </b-dropdown-option>
                    <b-dropdown-option>Create note
                        <b-icon pack="fa" icon="sticky-note" type="is-primary">
                        </b-icon>
                    </b-dropdown-option>
    
                </b-dropdown>
    
            </div>
        </div>
    
        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <CreateForm v-bind="formProps"></CreateForm>
        </b-modal>
    </nav>
</template>

<style src="./style.scss"></style>

<script>
import axios from 'axios';

export default {
    data: () => ({
        posts: [],
        showNav: false,
        errors: [],
         isComponentModalActive: false,
        formProps: {

            title: 'aa',
            text: 'bb',
            tags: 'cc',
            priority: '1'
        }
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