import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

// Add global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

// Add warning handler
app.config.warnHandler = (msg, vm, trace) => {
  console.warn('Warning:', msg)
  console.warn('Trace:', trace)
}

app.use(pinia)
app.use(router)

// Mount the app after all plugins are initialized
app.mount('#app')