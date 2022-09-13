<template>
  <v-app>
    <v-layout>
    <Navigation />
    <SideNav />
    
    <v-main>
      <router-view/>
    </v-main>
    
  </v-layout>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import SideNav from "./components/SideNav.vue";

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Navigation,
    SideNav
}
}
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
