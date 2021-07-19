import {
  CALC_BREADCRUMB_LIST
} from './mutation-types'

const mutations = {
  [CALC_BREADCRUMB_LIST] (state, arr) {
    state.breadcrumbList = arr
  }
}

export default mutations