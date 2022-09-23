
<template >
  <div class="live-container">
    <v-container>
    <v-row no-gutters>
      <v-col
        col="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{singleSongData.title}}
        </v-sheet>
      </v-col>
      <v-col
        col="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{singleSongData.title}}
        </v-sheet>
      </v-col>
      <v-col
        col="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{singleSongData.title}}
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
    <v-col
        col="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{singleSongData.title}}
        </v-sheet>
      </v-col>
      <v-col
        col="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{singleSongData.title}}
        </v-sheet>
      </v-col>
      <v-col
        col="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{singleSongData.title}}
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col col="12">
        <v-sheet class="ma-2 pa-7 song-lyrics">
        <div v-html="singleSongData.song_lyrics"></div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</div>

    <!-- <div>{{singleSongData.title}}</div>
    <div>{{singleSongData.band}}</div>
    <div>{{singleSongData.key}}</div>
    <div class="song-lyrics">
        <div v-html="singleSongData.song_lyrics"></div>
    </div>
  </div>
     -->

</template>

<script>
import axios from '@/axios'
export default {
    data(){
    return {
      singleSongData: []
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


<style lang="scss">

  .live-container {
    background-color: rgba(133, 133, 133, 0.1);
    .v-container {
    }
    
    .song-lyrics {
      text-align: center;
    }
  }
</style>