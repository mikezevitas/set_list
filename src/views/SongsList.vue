<template>
  <div class="container">
     <router-link to="/add-song"> Add a New Song </router-link>
    <li v-for="(song, index) in songData" v-bind:key="index">
  {{ song.id }}
    </li>



    <table class="">
  <thead>
    <tr>
      <th class=" ...">Song</th>
      <th class=" ...">Artist</th>
      <th class=" ...">Year</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(song, index) in songData" v-bind:key="index">
      <td class=" ...">{{song.id}}</td>
      <td class=" ...">{{song.id}}</td>
      <td class=" ...">{{song.id}}</td>

    </tr>
    
  </tbody>
</table>


  </div>
</template>

<script>
import axios from '@/axios'


export default {
  name: 'SongList',
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
