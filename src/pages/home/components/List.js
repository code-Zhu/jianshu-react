import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
import {getMoreListAction} from '../store/actionCreator'
class List extends Component {
  render(){
    const {list, page, getMoreList} = this.props
    return(
      <div>
        {
          list.map(item => (
            <ListItem key={item.get('id')}>
              <img alt="" src={item.get('imgUrl')} />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={() => {getMoreList(page)}}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    const action = getMoreListAction(page+1)
    dispatch(action)
  }
})
const mapState = (state) => ({
  list: state.getIn(['homeReducer', 'articList']),
  page: state.getIn(['homeReducer', 'articPage'])
})
export default connect(mapState, mapDispatch)(List);