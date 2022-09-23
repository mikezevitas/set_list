<template>
  <v-app>
    <v-layout>
    <Navigation />
    
    <v-main  style="margin: 30px;">
      <router-view/>
    </v-main>
    
  </v-layout>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Navigation,
}
}
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
