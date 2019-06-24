import { SEARCH_STATE, INIT_LIST } from './actionTypes'
import { fromJS } from 'immutable'
const  defaultState = fromJS({
  focused: false,
  list: []
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case SEARCH_STATE:
      return state.set('focused', action.value);
    case INIT_LIST:
      return state.set('list', action.list)
    default:
      return state
  }
}