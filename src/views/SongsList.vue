<template>
 
    <v-table>
    <thead>
      <router-link to="/add-song"> Add a New Song </router-link>
      <tr>
        <th class="text-left" @click="sort('id')"> 
          ID <v-icon icon="mdi-home" />
        </th>
        <th class="text-left" @click="sort('title')">
          Song
        </th>
         <th class="text-left" @click="sort('Band')">
          Band
        </th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(song, index) in allSongs" v-bind:key="index"
      >
        <td>{{ song.id }}</td>
        <td>{{ song.title }}</td>
        <td>{{ song.band }}</td>
        <td>
           <router-link  :to="{path: '/live/' + song.id}">   preform </router-link>
           
        </td>
        <td>
           <router-link  :to="{path: '/edit-song/' + song.id}">   Edit </router-link>
           
        </td>
        <td v-on:click="deleteSongData(song.id, index)"> Trash</td>
      </tr>
    </tbody>
  </v-table>


  <!-- </div> -->
</template>

<script>
import axios from '@/axios'


export default {
  name: 'SongList',
  data() {
    return {
      songData: [],
      currentSort:'title',
      currentSortDir:'asc'
    }
  },
methods : {
  async fetchApi() {
     axios.get('/items/songs/')
    .then((songs) => {
      this.songData = songs.data.data
      console.log(this.songData)
      })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  },

   deleteSongData: function(id, index) {
  if(confirm("Are you sure you want to Delete this song?")){
      axios.delete('/items/songs/' + id)
      .then(() => {
      window.location.reload();
       this.songs.data.splice(index, 1);

      });
  }
    },


    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    }
  
},
computed:{
  allSongs:function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.songData.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  },

mounted() {
  this.fetchApi()
  }
}
</script>
