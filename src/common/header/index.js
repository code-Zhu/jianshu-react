import React from 'react'
import {CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { changeSearchStateAction } from './store/actionCreators'
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
const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <span className='switch'>换一换</span>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>财经</SearchInfoItem>
          <SearchInfoItem>历史</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}
const Header = (props) => {
  const { focused,handleChangeFocused } = props
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
              onFocus={()=>handleChangeFocused(true)}
              onBlur={()=>handleChangeFocused(false)}
              className={focused?'focused':''}/>
          </CSSTransition>
          <i className={focused?'iconfont focused':'iconfont'}>
            &#xe600;
          </i>
          {getListArea(focused)}
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

const mapStateToProps = (state) => {
  return {
    // focused: state.headerReducer.get('focused')
    focused: state.getIn(['headerReducer', 'focused'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeFocused (value) {
      const action = changeSearchStateAction(value)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)