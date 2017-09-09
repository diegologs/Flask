<template>
    <form action="javascript:void(0);" title="Create task">
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Create task
                    <b-icon pack="fa" icon="pencil" type="is-primary">
                    </b-icon>
                </p>
            </header>
            <section class="modal-card-body">
                <b-field label="Title">
                    <b-input type="text" v-model="newTitle" placeholder="Title" required>
                    </b-input>
                </b-field>

                <b-field label="Title">
                    <b-input type="textarea" v-model="newText" placeholder="Text">
                    </b-input>
                </b-field>

                <b-field label="Tags">
                    <b-input type="text" v-model="newTags" placeholder="Tags separated by commas">
                    </b-input>
                </b-field>

                <b-field label="Priority">
                    <b-input type="text" v-model="newPriority" placeholder="Priority (1 to 4)">
                    </b-input>
                </b-field>

                <b-field v-if="newText" label="Preview:">
                    <p id="text_preview" style="color: black !important;" v-html="newText.replace(/(?:\r\n|\r|\n)/g, '<br />')"></p>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button v-on:click="create" class="button is-success">Create</button>
            </footer>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        newTitle: this.title,
        newText: this.text,
        newTags: this.tags,
        newPriority: this.priority
    }),

    methods: {
        create: function (event) {






            axios.post(`http://flaskbackend.herokuapp.com/tasks/`, {
                title: this.newTitle,
                text: this.newText.replace(/(?:\r\n|\r|\n)/g, '<br />'),
                tags: this.newTags.split(),
                priority: this.newPriority
            })
                .then(response => {
                    // JSON responses are automatically parsed.


                    this.$events.emit('testEvent');
                    this.$events.emit('refreshTask');
                    this.$toast.open({
                        message: 'Task created correctly',
                        type: 'is-success'
                    })
                    this.$parent.close()

                })
                .catch(e => {
                    this.errors.push(e)
                })

        },
    },

}
</script>

<style scoped>
.modal-card {
    width: 640;
}

.modal-card {
    width: 640;
}

.text_preview {
    color: #000 !important;
}

#text_preview>>>h2 {
    font-size: 2.5em !important;
    font-weight: bold;
}

#text_preview>>>h3 {
    font-size: 2em !important;
    font-weight: bold;
}

#text_preview>>>h4 {
    font-size: 1.5em !important;
}
</style>