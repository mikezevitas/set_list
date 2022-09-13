import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { LightEditorPlugin } from "@hannanmiah/light-editor"
import "@hannanmiah/light-editor/dist/style.css"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(LightEditorPlugin)
  .mount('#app')
