import { defineComponent, computed } from 'vue'
import { usePlacesStore, useMapStore } from '@/composables'

export default defineComponent({
  name: 'MyLocationBtn',
  setup () {
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { map, isMapReady } = useMapStore()

    return {
      isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

      onMyLocationClicked: () => {
        // eslint-disable-next-line no-unused-expressions
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 15
        })
      }
    }
  }
})
