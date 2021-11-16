import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Redirect, Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import store from './redux/store';

const Index = () => {
  return(
    <Router>
      <Routes>
        <Route exact path='/' component={Home}/>
        <Redirect to='/'/>
      </Routes>
    </Router>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('root')
);
