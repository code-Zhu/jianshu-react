import axios from 'axios'
import {CHANGE_HOME_DATA, HOME_LIST_LOAD_MORE, CHANGE_BACK_TOP} from './actionType'
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      const action = {
        type: CHANGE_HOME_DATA,
        articList: result.articList,
        recommendList: result.recommendList,
        topicList: result.topicList
      }
      dispatch(action)
    })
  }
}
export const getMoreListAction = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data
      const action = {
        type: HOME_LIST_LOAD_MORE,
        data: result.data,
        page
      }
      dispatch(action)
    })
  }
}
export const toggleBackTop = (show) => ({
  type: CHANGE_BACK_TOP,
  show
})