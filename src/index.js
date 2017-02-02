import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import './index.css';

import App from './components/App';
import About from './components/About';
import Home from './containers/Home';
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);