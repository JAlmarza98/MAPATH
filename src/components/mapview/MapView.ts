/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, ref, onMounted, watch } from 'vue'
import { useMapStore, usePlacesStore } from '@/composables'
import Mapboxgl from 'mapbox-gl'

export default defineComponent({
  name: 'MapView',
  setup () {
    const mapElement = ref<HTMLDivElement>()
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { setMap } = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) return
      if (!userLocation.value) return

      await Promise.resolve()

      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: userLocation.value,
        zoom: 15
      })

      const mylocationPopup = new Mapboxgl.Popup()
        .setLngLat(userLocation.value)
        .setHTML(`
          <h4>Aqui estoy</h4>
          <p>${userLocation.value}</p>
        `)

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(mylocationPopup)
        .addTo(map)

      setMap(map)
    }

    onMounted(() => {
      if (isUserLocationReady.value) return initMap()
    })

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) return initMap()
    })

    return {
      mapElement,

      userLocation,
      isUserLocationReady
    }
  }
})
