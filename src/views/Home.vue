<template>
  <div class="home">
     <router-link to="/add-song"> Add a New Song </router-link>
    <li v-for="(song, index) in songData" v-bind:key="index">
  {{ song.id }} | {{song.title}} | {{song.song_lyrics}}
    </li>
  </div>
</template>

<script>
import axios from '@/axios'


export default {
  name: 'Home',
  components: {
    // HelloWorld
  }, 
  data() {
    return {
      songData: [],
    }
  },

methods : {
  async fetchApi() {
     axios.get('/items/songs/')
    .then((songs) => {
      this.songData = songs.data.data
      })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  }
},
mounted() {
  this.fetchApi()
}
}
</script>
