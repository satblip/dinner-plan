import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import reducers from './reducers';
import Application from './containers/Application';
import HomeScreen from './components/HomeScreen';
import AllWeeksList from './components/AllWeeksList';
import WeekList from './components/WeekList';
import RecipeDay from './components/RecipeDay';
import PageNotFound from './components/PageNotFound';
import axios from 'axios';
import { fetchData, setCurrentDate } from './actions';
import moment from 'moment';

const enhancer = compose(persistState());
const store = createStore(reducers, applyMiddleware(thunk), enhancer);

axios.get('../../recipes.json').then(response => {
  store.dispatch(fetchData(response.data));
});

moment.locale('fr');
store.dispatch(setCurrentDate(moment()));

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
