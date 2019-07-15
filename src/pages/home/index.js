import React, {Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import {getHomeInfo, toggleBackTop} from './store/actionCreator'
import {
  HomeWapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeShowBackTop)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeShowBackTop)
  }
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render(){
    const {showBackTop} = this.props
    return(
      <HomeWapper>
        <HomeLeft>
          <img className="banner-img" alt="" src="https://upload.jianshu.io/admin_banners/web_images/4676/973faa095266d5335fd5a072e6cfc14dcaf08493.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showBackTop?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
      </HomeWapper>
    )
  }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {
      const action = getHomeInfo()
      dispatch(action)
    },
    changeShowBackTop() {
      let action
      if (document.documentElement.scrollTop > 100) {
        action = toggleBackTop(true)
      } else {
        action = toggleBackTop(false)
      }
      dispatch(action)
    }
})
const mapState = (state) => ({
  showBackTop: state.getIn(['homeReducer', 'showBackTop'])
})
export default connect(mapState, mapDispatch)(Home)