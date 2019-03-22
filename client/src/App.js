import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/home';
import Cart from './components/cart';
import Payment from './components/payment';
import Notfound from './components/notfound';

import store from './redux'
import Receipt from './components/receipt';

class App extends Component {
  render() {
    return (
            <Provider store={store}>
            <BrowserRouter>
      <div className="App">

            <Switch>
            <Route path={"/home"} component={Home}></Route>
            <Route path={"/payment"} component={Payment}></Route>
     
            <Route path={"/receipt"} component={Receipt}></Route>
            <Route path={"/cart"} component={Cart}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="*" component={Notfound}></Route>
            </Switch>
      </div>
            
            </BrowserRouter>
            </Provider>
    );
  }
}

export default App;
