import axios from 'axios'
import { mapboxApiKey } from '@/env/contants'

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: mapboxApiKey
  }
})

export default directionsApi
