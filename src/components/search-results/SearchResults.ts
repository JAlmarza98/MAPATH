/* eslint-disable no-unused-expressions */
import { defineComponent, ref, watch } from 'vue'
import { usePlacesStore, useMapStore } from '@/composables'
import { Feature } from '@/intefaces/places'

export default defineComponent({
  name: 'SearchResults',
  setup () {
    const { isLoadingPlaces, places } = usePlacesStore()
    const { map, setPlaceMarkers } = useMapStore()

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
      }
    }
  }
})
