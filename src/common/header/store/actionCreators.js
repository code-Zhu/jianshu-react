import { SEARCH_STATE, INIT_LIST, MOUSE_IN_STATE, CHANGE_PAGE } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const changeSearchStateAction = (value) => ({
  type: SEARCH_STATE,
  value
})
export const changeMouseInAction = (value) => ({
  type: MOUSE_IN_STATE,
  value
})
export const initListAction = (list) => ({
  type: INIT_LIST,
  list: fromJS(list),
  total: Math.ceil(list.length / 10)
})
export const changePage = (newPage) => ({
  type: CHANGE_PAGE,
  newPage
})
export const getlist = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      if (res.data.success) {
        dispatch(initListAction(res.data.data))
      }
    })
  }
}