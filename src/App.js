import React from 'react';
import { GlobalStyled } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Iconfont />
      <Header></Header>
    </Provider>
  );
}

export default App;
