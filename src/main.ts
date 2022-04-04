import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiamFsbWFyemE5OCIsImEiOiJjbDFrdHNjOTYwNDNuM3BrcTVxNXFhazUxIn0.Vyy7eE6gAO7aeDqjv2Ifzw'

if (!navigator.geolocation) {
  alert('Tu navegador no soporta la geolocalización')
  throw new Error('Tu navegador no soporta la geolocalización')
}

createApp(App).use(store).use(router).mount('#app')
