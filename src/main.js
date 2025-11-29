import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
const authStore = (await import('./stores/auth')).useAuthStore()
authStore.restoreSession()
app.use(router)

app.mount('#app')
