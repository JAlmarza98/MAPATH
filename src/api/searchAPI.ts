import axios from 'axios'
import { mapboxApiKey } from '@/env/contants'

const searchAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: mapboxApiKey
  }
})

export default searchAPI
