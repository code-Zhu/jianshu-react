import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'
class Topic extends Component {
  render(){
    const { topicList } = this.props
    return(
      <TopicWrapper>
        {
          topicList.map(item => (
            <TopicItem key={item.get('id')}>
              <img alt="" src={item.get('imgUrl')}/>
              {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
  topicList: state.getIn(['homeReducer', 'topicList'])
})

export default connect(mapState, null)(Topic);