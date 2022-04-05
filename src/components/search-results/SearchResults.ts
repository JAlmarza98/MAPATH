/* eslint-disable no-unused-expressions */
import { defineComponent, ref, watch } from 'vue'
import { usePlacesStore, useMapStore } from '@/composables'
import { Feature } from '@/interfaces/places'
import { LngLat } from '@/store/map/actions'

export default defineComponent({
  name: 'SearchResults',
  setup () {
    const { isLoadingPlaces, places, userLocation } = usePlacesStore()
    const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()

    const activePlace = ref('')

    watch(places, (newPlaces) => setPlaceMarkers(newPlaces))

    return {
      isLoadingPlaces,
      places,
      activePlace,

      onPlaceClick: (place: Feature) => {
        activePlace.value = place.id
        const [lng, lat] = place.center

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 15
        })
      },
      getRouteDirections: (place: Feature) => {
        if (!userLocation.value) return

        activePlace.value = place.id
        const [lng, lat] = place.center
        const [startLng, startLat] = userLocation.value

        const start: LngLat = [startLng, startLat]
        const end: LngLat = [lng, lat]

        getRouteBetweenPoints(start, end)

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 15
        })
      }
    }
  }
})
