import { SEARCH_STATE, INIT_LIST } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const changeSearchStateAction = (value) => ({
  type: SEARCH_STATE,
  value
})
export const initListAction = (list) => ({
  type: INIT_LIST,
  list: fromJS(list)
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