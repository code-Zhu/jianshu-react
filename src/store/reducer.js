import { SEARCH_STATE } from './actionTypes'
const  defaultState = {
  focused: false
}

export default (state=defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === SEARCH_STATE) {
    newState.focused = action.value
  }
  return newState
}