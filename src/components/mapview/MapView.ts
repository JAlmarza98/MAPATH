/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, ref, onMounted, watch } from 'vue'
import { usePlacesStore } from '@/composables'
import Mapboxgl from 'mapbox-gl'

export default defineComponent({
  name: 'MapView',
  setup () {
    const mapElement = ref<HTMLDivElement>()
    const { userLocation, isUserLocationReady } = usePlacesStore()

    const initMap = async () => {
      if (!mapElement.value) return
      if (!userLocation.value) return

      await Promise.resolve()

      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: userLocation.value,
        zoom: 15
      })
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
