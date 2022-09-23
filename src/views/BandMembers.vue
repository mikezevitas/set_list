<template>
    <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Instument</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone Number</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(member, index) in bandMembers" v-bind:key="index"
      >
        <td>{{ member.first_name }} {{member.last_name}}</td>
        <td>{{ member.id }}</td>
        <td>{{ member.email }}</td>
        <td>{{ member.phone_number }}</td>
        <td>
           <router-link  :to="{path: '/edit-song/' + member.id}" style="text-decoration: none; color: inherit;">  <v-icon icon="mdi-pencil" /> </router-link>
           
        </td>
        <!-- <td v-on:click="deleteSongData(member.id, index)" style="cursor:pointer"> <v-icon icon="mdi-delete" /></td> -->
        <td>
            <v-dialog
            v-model="dialog[member.id]"
            persistent
            >
            <template  v-slot:activator="{ props }">

                <v-icon icon="mdi-delete"  v-bind="props" />
            </template>

            <v-card class="ma-4 pa-4 pt-7">
        <v-card-title class="text-h6 text-center" >
            Are you sure you want to delete this {{member.first_name}}?
        </v-card-title>

        <v-card-actions >
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="dialog = false"
            v-on:click="deleteBandData(member.id, index)"
            
          >
            {{member.id}}
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
</template>


<script>
import axios from '@/axios'


export default {
  name: 'Band Members',
  data() {
    return {
        bandMembers: [],
        dialog: {
        },
        props: {}

        
    }
  },
methods : {
   async fetchApi() {
     axios.get('items/band_members/')
    .then((members) => {
        this.bandMembers = members.data.data
        console.log(this.bandMembers, 'test')
      })
    .catch(error => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
  },

   deleteBandData: function(id) {
//   if(confirm("Are you sure you want to Delete this song?")){
      axios.delete('/items/band_members/' + id)
      .then(() => {

          window.location.reload();

      });
//   }
    },
    

 },
 mounted() {
    this.fetchApi();

},

}
</script>