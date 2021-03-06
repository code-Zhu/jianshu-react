import styled from 'styled-components'
export const HomeWapper = styled.div`
  overflow:hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  img{
    margin-right: 10px;
    width: 32px;
    height: 32px;
    display: block;
    float: left;
  }
`
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  img{
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  margin: 30px 0;
  cursor: pointer;
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
  margin-bottom: 5px;
`
export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`
export const BackTop = styled.div`
  position: fixed;
  right: 0;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
  cursor: pointer;
`