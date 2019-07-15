import React, {Component} from 'react'
import {CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { changeSearchStateAction, getlist, changeMouseInAction, changePage } from './store/actionCreators'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'

class Header extends Component {
  render() {
    const { focused,handleChangeFocused } = this.props
    return(
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left download'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slider">
              <NavSearch
                onFocus={()=>handleChangeFocused(true, this.props.list)}
                onBlur={()=>handleChangeFocused(false)}
                className={focused?'focused':''}/>
            </CSSTransition>
            <i className={focused?'iconfont focused zoom':'iconfont zoom'}>
              &#xe600;
            </i>
            {this.getListArea()}
          </SearchWapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className="iconfont">&#xe61c;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getListArea () {
    const {focused, mouseIn, list, page, total, mouseAction, handleChangePage} = this.props
    const jsList = list.toJS() // 因为list是immutable类型的数据，不能直接用list[i]调用
    const pageList = []
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        jsList[i] && pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={() => {mouseAction(true)}}
          onMouseLeave={() => {mouseAction(false)}}>
          <SearchInfoTitle>
            热门搜索
            <span className='switch'
              onClick={() => {handleChangePage(page, total, this.iconSpin)}}>
              <i ref={(icon) => {this.iconSpin = icon}} className="iconfont spin">&#xe851;</i>
              换一换
            </span>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['headerReducer', 'focused']),
    mouseIn: state.getIn(['headerReducer', 'mouseIn']),
    list: state.getIn(['headerReducer', 'list']),
    page: state.getIn(['headerReducer', 'page']),
    total: state.getIn(['headerReducer', 'total'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeFocused (value, list) {
      const action = changeSearchStateAction(value)
      if (value) {
        list.size < 1 && dispatch(getlist())
      }
      dispatch(action)
    },
    mouseAction (value) {
      const action = changeMouseInAction(value)
      dispatch(action)
    },
    handleChangePage (page, total, spinIcon) {
      let angle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
      if (angle) {
        angle = parseInt(angle)
      } else {
        angle = 0
      }
      spinIcon.style.transform = `rotate(${angle+360}deg)`
      if (page < total) {
        dispatch(changePage(page + 1))
      } else {
        dispatch(changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)