
<template>
    <div>{{singleSongData.title}}</div>
    <div>{{singleSongData.band}}</div>
    <div>{{singleSongData.key}}</div>
    <div v-html="singleSongData.song_lyrics"></div>
    

</template>

<script>
import axios from '@/axios'
export default {
    data(){
    return {
      singleSongData: {
        title:'',
        key: '',
        band: '',
        song_lyrics: ''
      },
    }
    },

    methods: {
         fetchApi() {
            const id = this.$route.params.id;
            axios.get('items/songs/' + id)
            .then((results) => {
            this.singleSongData = results.data.data
            })
            .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
            });
        },
    },
    mounted() {
    this.fetchApi();

},

    components: {
    // Wysiwyg
}
}
</script>