import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from './App.vue'
import '../../assets/base.css'

// Locale
const i18n = createI18n({})

// Store
const pinia = createPinia()

const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.mount('#app')
