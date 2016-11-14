import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Application from './containers/Application';
import HomeScreen from './components/HomeScreen';
import AllWeeksList from './components/AllWeeksList';
import WeekList from './components/WeekList';
import RecipeDay from './components/RecipeDay';
import PageNotFound from './components/PageNotFound';
import axios from 'axios';
import { fetchData, getCurrentWeekNumber } from './actions';
import moment from 'moment';

const store = createStore(reducers, applyMiddleware(thunk));
const today = new Date();
const weekNumber = moment(today).week();

axios.get('../../recipes.json').then(response => {
  store.dispatch(fetchData(response.data));
});

store.dispatch(getCurrentWeekNumber(weekNumber));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Application}>
        <IndexRoute component={HomeScreen} />

        <Route path='/weeks' component={AllWeeksList} />
        <Route path='/weeks/:week' component={WeekList} />
        <Route path='/weeks/:week/:day' component={RecipeDay} />

        <Route path='*' component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
