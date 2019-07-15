import {CHANGE_HOME_DATA, HOME_LIST_LOAD_MORE, CHANGE_BACK_TOP} from './actionType'
import { fromJS } from 'immutable'

const  defaultState = fromJS({
  topicList: [],
  articList: [],
  recommendList: [],
  articPage: 0,
  showBackTop: false
})
const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articList: fromJS(action.articList),
    recommendList: fromJS(action.recommendList)
  })
}
const homeListLoadMore = (state, action) => {
  return state.merge({
    articList: state.get('articList').concat(fromJS(action.data)),
    articPage: action.page
  })
}

export default (state=defaultState, action) => {
  switch(action.type) {
    case CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case HOME_LIST_LOAD_MORE:
      return homeListLoadMore(state, action)
    case CHANGE_BACK_TOP:
      return state.set('showBackTop', action.show)
    default:
      return state
  }
}