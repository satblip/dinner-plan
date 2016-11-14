import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class AllWeeksList extends Component {
  static propTypes = {
    children: PropTypes.object,
    weeksRecipes: PropTypes.object
  }
  render () {
    const weekLinks = Object.keys(this.props.weeksRecipes)
      .map((week, index) => (
        <Link key={index} to={`/weeks/${week}`}>Semaine {week}</Link>
      ));

    return (
      <div className={style.allWeeksList}>
        <h1>All Weeks List</h1>
        <p><Link to='/'>Back to Home Screen</Link></p>
        {weekLinks}
      </div>
    );
  }
}
