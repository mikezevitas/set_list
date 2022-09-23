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
          <th class="text-left" @click="sort('Singer')"> Lead Singer</th>
        <th>Live</th>
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
        <td>{{ song.lead_singer }}</td>
        <td >
           <router-link  :to="{path: '/live/' + song.id}" style="text-decoration: none; color: inherit;">   <v-icon icon="mdi-microphone-variant" /> </router-link>
           
        </td>
        <td>
           <router-link  :to="{path: '/edit-song/' + song.id}" style="text-decoration: none; color: inherit;">  <v-icon icon="mdi-pencil" /> </router-link>
           
        </td>
        <!-- <td v-on:click="deleteSongData(song.id, index)" style="cursor:pointer"> <v-icon icon="mdi-delete" /></td>
         -->
         <td>
            <v-dialog
            v-model="dialog[song.id]"
            persistent>
            <template v-slot:activator="{ props }">

                <v-icon icon="mdi-delete"  v-bind="props" />
              <!-- <v-btn v-bind="props" > {{song.id}}</v-btn> -->
            </template>
            <v-card class="ma-4 pa-4 pt-7">
        <v-card-title class="text-h6 text-center">
            Are you sure you want to delete this song?
        </v-card-title>
        <v-card-actions >
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
            v-on:click="deleteSongData(song.id, index)"
            
          >
           Yes
          </v-btn>
          <v-btn
          
            text
            @click="dialog = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
        </td>
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
      currentSortDir:'asc',
      dialog: {},

      // leadData: []
    }
  },
methods : {
  async fetchApi() {
     axios.get('items/songs/')
    .then((songs) => {
      this.songData = songs.data.data
      console.log(this.songData)
      })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  },

   deleteSongData: function(id) {

      axios.delete('/items/songs/' + id)
      .then(() => {
        console.log(id)
        // this.allSongs.data.slice(index);
        window.location.reload();

      });
  
    },
    // bandMemberID(id){
    //           this.dialog=true;
    //           this.bandMemberId=id;
    //        },
  //   getLead(id) {
  //    axios.get('items/band_members/' + id)
  //   .then((lead) => {
  //     this.leadData = lead.data.data
  //     })
  //   .catch(error => {
  //     this.errorMessage = error.message;
  //     console.error("There was an error!", error);
  //   });
  // },


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
  // this.getLead()
  }
}
</script>


<style lang="scss">
.v-overlay__scrim {
background-color: #8b8c8998;
}
</style>