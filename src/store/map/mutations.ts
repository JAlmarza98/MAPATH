/* eslint-disable no-unused-expressions */

import { MutationTree } from 'vuex'
import { MapState } from './state'
import Mapboxgl from 'mapbox-gl'
import { Feature } from '@/interfaces/places'
import { LngLat } from './actions'

const mutation: MutationTree<MapState> = {
  setMap (state: MapState, map: Mapboxgl.Map) {
    state.map = map
  },

  setDistanceDuration (state: MapState, { distance, duration }: { distance: number, duration: number }) {
    let kms = distance / 1000
    kms = Math.round(kms * 100)
    kms /= 100

    state.distance = kms
    state.duration = Math.floor(duration / 60)
  },

  setPlaceMarkers (state: MapState, places: Feature[]) {
    state.markers.forEach(marker => marker.remove())
    state.markers = []

    if (state.map === undefined) return

    for (const place of places) {
      const [lng, lat] = place.center

      const popup = new Mapboxgl.Popup()
        .setLngLat([lng, lat])
        .setHTML(`
          <h4>${place.text}</h4>
          <p>${place.place_name}</p>
        `)

      const marker = new Mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map)

      state.markers.push(marker)
    }

    if (state.map.getLayer('RouteString')) {
      state.map.removeLayer('RouteString')
      state.map.removeSource('RouteString')
      state.distance = undefined
      state.duration = undefined
    }
  },

  setRoutePolyline (state: MapState, coords: number[][]) {
    const start = coords[0]

    const bounds = new Mapboxgl.LngLatBounds(
      [start[0], start[1]],
      [start[0], start[1]]
    )

    for (const coord of coords) {
      const newCoord: LngLat = [coord[0], coord[1]]
      bounds.extend(newCoord)
    }

    state.map?.fitBounds(bounds, {
      padding: 100
    })

    const sourceData: Mapboxgl.AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    if (state.map?.getLayer('RouteString')) {
      state.map.removeLayer('RouteString')
      state.map.removeSource('RouteString')
    }

    state.map?.addSource('RouteString', sourceData)

    state.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': '#0d6efd',
        'line-width': 3
      }
    })
  }
}

export default mutation
