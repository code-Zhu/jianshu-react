import React from 'react';
import { GlobalStyled } from './style'
import { Iconfont } from './statics/iconfont/iconfont'
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyled />
        <Iconfont />
        <Header></Header>
        <BrowserRouter>
          <div>
            <Route path="/" exact render={() => <Home />}></Route>
            <Route path="/detail" exact render={() => <Detail />}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
