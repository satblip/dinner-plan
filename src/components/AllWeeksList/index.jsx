import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';
import moment from 'moment';

export default class AllWeeksList extends Component {
  static propTypes = {
    children: PropTypes.object,
    weeksRecipes: PropTypes.object
  }
  render () {
    const weekLinks = Object.keys(this.props.weeksRecipes)
      .map((week, index) => {
        const month = moment(week).format('MMMM');
        const weekNumber = moment(week).isoWeek();
        return (
          <Link key={index} to={`/weeks/${week}`}>
            Semaine {`${weekNumber} - ${month}`}
          </Link>
        );
      });

    return (
      <div className={style.allWeeksList}>
        <h1>All Weeks List</h1>
        {weekLinks}
      </div>
    );
  }
}
