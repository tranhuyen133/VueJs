// import './assets/main.css'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import {router} from '.'

const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
})

app.use(router)
app.use(vuetify)
app.mount('#app')
