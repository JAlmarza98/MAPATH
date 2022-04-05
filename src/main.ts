import { createApp } from 'vue'
import { mapboxApiKey } from '@/env/contants'

import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = mapboxApiKey

if (!navigator.geolocation) {
  alert('Tu navegador no soporta la geolocalización')
  throw new Error('Tu navegador no soporta la geolocalización')
}

createApp(App).use(store).use(router).mount('#app')
