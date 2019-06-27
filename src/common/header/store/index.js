import { SEARCH_STATE, INIT_LIST, MOUSE_IN_STATE, CHANGE_PAGE } from './actionTypes'
import { fromJS } from 'immutable'
const  defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  total: 0
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case SEARCH_STATE:
      return state.set('focused', action.value);
    case INIT_LIST:
      return state.merge({
        list: action.list,
        total: action.total
      });
    case MOUSE_IN_STATE:
      return state.set('mouseIn', action.value);
    case CHANGE_PAGE:
      return state.set('page', action.newPage)
    default:
      return state
  }
}