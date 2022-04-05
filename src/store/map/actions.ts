import { ActionTree } from 'vuex'
import { MapState } from './state'
import { StateInterface } from '../index'
import { DirectionsResponse } from '@/interfaces/directions'
import { directionsAPI } from '@/api'

export type LngLat = [ number, number ];

const actions: ActionTree<MapState, StateInterface> = {
  async getRouteBetweenPoints ({ commit }, { start, end }: { start: LngLat, end: LngLat }) {
    const resp = await directionsAPI.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`)

    commit('setRoutePolyline', resp.data.routes[0].geometry.coordinates)
  }
}

export default actions
