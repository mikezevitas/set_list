<template>
    <!-- <div v-for="(song, index) in singleSongData" v-bind:key="index"> -->
      <v-form>
        <v-container>
                <!-- <label> Song Title</label>
                <input type="text" :value="song.title" :v-model="editFrom.title" /> -->
        <v-text-field
            v-model="singleSongData.title"
            label="Song Title"

          ></v-text-field>
          <v-text-field
            v-model="singleSongData.band"
            label="Band"
          ></v-text-field>
          <v-text-field
            v-model="singleSongData.key"
            label="Key Signiture"
          ></v-text-field>
          <v-text-field
            v-model="singleSongData.key"
            label="Key Signiture"
          ></v-text-field>

          <!-- <v-text-field
            v-model="singleSongData.song_lyrics"
            label="Lyrics"
          ></v-text-field> -->
          <v-col cols="12">
          <light-editor v-model="singleSongData.song_lyrics" />

          </v-col>
                <!-- <label>Key</label>
                <input type="text" v-model="editForm.key" />
                <label>Band</label>
                <input type="text" v-model="editForm.band"/>
                <label>Lyrics</label>
                <textarea type="text" v-model="editForm.song_lyrics"></textarea> -->

                <v-col cols="12"
          md="2">
            <v-btn v-on:click="saved(singleSongData.id)"> Submit </v-btn>
        </v-col>
    </v-container>
    </v-form>
<!-- </div>  -->

</template>

<script>
import axios from '@/axios'
// import Wysiwyg from '@/components/Wysiwyg.vue'
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
        saved(id){
            axios.patch(`items/songs/ ${id}`, this.singleSongData)
                 .then(() => {
                    console.log('submited')
                    this.$router.push('/songs/');
                    })
                    .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                    });
        }
    },
    mounted() {
    this.fetchApi();

},

    components: {
    // Wysiwyg
}
}
</script>