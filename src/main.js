import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

<<<<<<< HEAD
=======

>>>>>>> 54889bee1edef6c3732bbefa81634df772e9ebb1

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
