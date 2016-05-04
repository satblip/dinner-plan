import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';
import Content from './components/Content.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute name='Index' component={Content}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
