<template>
    <nav class="navbar ">
        <div class="navbar-brand">
    
            <a class="navbar-item" href="/">
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
                <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
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
                </a>
    
            </div>
        </div>
    </nav>
</template>

<style src="./style.css"></style>

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