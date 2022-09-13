<template>
    <v-app-bar class="main-navigation-container" > 
 
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
        <v-btn
          v-bind="props"
  
        >
                <v-icon>mdi-dots-vertical</v-icon>

              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </v-app-bar>
    
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
}
</script>

