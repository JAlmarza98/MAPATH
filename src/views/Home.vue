<template>
  <MapView/>
  <MyLocationBtn/>
  <SearchBar/>
  <TripDetails/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePlacesStore } from '@/composables'

import MapView from '@/components/mapview/MapView.vue'
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'
import TripDetails from '@/components/trip-details/TripDetails.vue'

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationBtn, SearchBar, TripDetails },
  setup () {
    usePlacesStore()
  }
})
</script>
