import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './components/Layout';
import HomeScreen from './components/HomeScreen';
import AllWeeksList from './components/AllWeeksList';
import WeekList from './components/WeekList';
import RecipeDay from './components/RecipeDay';
import PageNotFound from './components/PageNotFound';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeScreen} />

      <Route path='/weeks' component={AllWeeksList} />
      <Route path='/weeks/:week' component={WeekList} />
      <Route path='/weeks/:week/:day' component={RecipeDay} />

      <Route path='*' component={PageNotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
);
