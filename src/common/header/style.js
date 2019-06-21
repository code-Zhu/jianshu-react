import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 58px;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logoPic});
  background-size: 100%;
`
export const Nav = styled.div`
  width: 880px;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  &.left { float: left }
  &.right { 
    float: right;
    color: #969696;
  }
  &.active { color: #ea6f5a }
  &.download:hover { background: #F5F5F5 }
`
export const SearchWapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff;
      cursor: pointer;
    }
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  min-height: 100px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  .switch{
    float: right;
    font-size: 12px;
    cursor: pointer;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a.attrs({
  href: ''
})`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 2px;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  box-sizing: border-box;
  padding: 0 30px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder{ color:#999 }
  &.focused{
    width: 240px;
  }
  &.slider-enter,&.slider-exit{ transition: all .2s ease-out }
  &.slider-enter-active{ width: 240px; }
  &.slider-exit-active{width: 160px;}
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`
export const Button = styled.div`
  float: right;
  cursor: pointer;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  &.reg { color: #EA6F59 }
  &.reg:hover{ background-color: #FEF7F6 }
  &.writing {
    color: #fff;
    background-color: #ea6f5a;
  }
`