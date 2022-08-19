<template>
  <Navigation />
  <section class="container">
    <SideNav class="grid" />
    <router-view class="grid" />
  </section>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import SideNav from '@/components/SideNav.vue'


export default {
  components: {
    Navigation,
    SideNav
  }
}
</script>


<style lang="scss">
@import "./styles/app.scss";


</style>
