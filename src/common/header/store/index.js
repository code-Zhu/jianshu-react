import { SEARCH_STATE } from './actionTypes'
import { fromJS } from 'immutable'
const  defaultState = fromJS({
  focused: false
})

export default (state=defaultState, action) => {
  if (action.type === SEARCH_STATE) {
    return state.set('focused', action.value)
  }
  return state
}