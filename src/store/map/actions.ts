import { ActionTree } from 'vuex'
import { MapState } from './state'
import { StateInterface } from '../index'

const actions: ActionTree<MapState, StateInterface> = {
  getInitialLocation (/* { commit } */) {
    // a line to prevente linter errors
  }
}

export default actions
