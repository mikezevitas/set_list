<template>
    
     <v-form >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.title"
            label="Song Title"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.band"
            label="Band Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
         <v-text-field
            v-model="form.key"
            label="Key Signiture"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <light-editor v-model="form.song_lyrics" />


        </v-col>
        <v-col cols="1">
            <v-btn 
            v-on:click="submit()" 
            > Submit </v-btn>
        </v-col>
        <v-col cols="1">
            <v-btn 
            @click="$router.go(-1)"
      outlined
      color="white"
            > Cancel </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from '@/axios'
export default {
    data(){
        return {
            form: {
                title: '',
                key: '',
                band: '',
                song_lyrics: '',
                             
            }, 
        }
    },

    methods: {
        submit(){
            axios.post('items/songs', this.form)
                 .then(() => {
                  console.log(this.form);
                    this.$router.push('/songs/');
                    })
                    .catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                    });
        }
    },
    components: {
}
}
</script>