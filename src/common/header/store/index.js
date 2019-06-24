import { SEARCH_STATE, INIT_LIST } from './actionTypes'
import { fromJS } from 'immutable'
const  defaultState = fromJS({
  focused: false,
  list: []
})

export default (state=defaultState, action) => {
  if (action.type === SEARCH_STATE) {
    return state.set('focused', action.value)
  }
  if (action.type === INIT_LIST) {
    return state.set('list', action.list)
  }
  return state
}