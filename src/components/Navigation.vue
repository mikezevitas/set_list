<template>
    <v-app-bar class="main-navigation-container" > 
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="links home-logo">
          Legends of the Stage
        </router-link>  
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon class="links"> 
        <router-link to="/add-song" class="links">
          <v-icon>mdi-plus</v-icon>
        </router-link>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        transition="fade-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
              
              >
                <v-list-item-title>
                  <router-link to="/">Account</router-link>
                </v-list-item-title>
                <v-list-item-title>
                  <router-link to="/">Logout</router-link>   
                </v-list-item-title>

              </v-list-item>
            </v-list>
          </v-menu>
    </v-app-bar>

    
    <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
      >
      <v-list >
          <router-link to="/songs/" class="links">
            <v-list-item prepend-icon="mdi-music-circle" title="Songs" value="Songs"></v-list-item>
        </router-link>
        <router-link to="/set-list/" class="links">
          <v-list-item prepend-icon="mdi-playlist-music" title="Set Lists" value="Set lists"></v-list-item>
        </router-link>
        <router-link to="/band-members/" class="links">
          <v-list-item prepend-icon="mdi-account-group" title="Band Members" value="band members"></v-list-item>
        </router-link>
        </v-list>
       </v-navigation-drawer>
    
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    drawer: false,
    group: null,  
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

