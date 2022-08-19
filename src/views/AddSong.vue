<template>
    <div>
        <label>Title</label>
        <input type="text" v-model="form.title"/>

        <label>Key</label>
        <input type="text" v-model="form.key"/>

        <label>Lyrics</label>
        <textarea type="text" v-model="form.lyrics"></textarea>

        <Buttons v-on:click="submit()" label="Submit me" :primary="false" />
    </div>
</template>

<script>
import axios from '@/axios'
import Buttons from "@/components/Buttons.vue"
export default {
    data(){
        return {
            form: {
                title: '',
                key: '',
                lyrics: ''
            }, 
        }
    },

    methods: {
        submit(){
            axios.post('items/songs', this.form)
                 .then(() => {
                    this.$router.push('/');
                    })
                    .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                    });
        }
    },
    components: {
        Buttons
    }
}
</script>