import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';
import moment from 'moment';
import classnames from 'classnames';

export default class Header extends Component {
  static propTypes = {
    params: PropTypes.object,
    location: PropTypes.object,
    weeksRecipes: PropTypes.object,
    weekDays: PropTypes.array,
    weekEndDays: PropTypes.array
  }
  render () {
    const { day, week } = this.props.params;
    const { pathname } = this.props.location;
    const { weekDays, weekEndDays } = this.props;

    let header = null;
    if (week) {
      header = (
        <div className={style.inner}>
          <Link to='/weeks'>
            <button>‹</button>
          </Link>
          {moment(week).format('MMMM')}<br />
          Semaine {moment(week).isoWeek()}
        </div>
      );
    }

    if (day) {
      const dayCircles = weekDays.map((dayItem, index) => {
        const dayInNumber = moment(week).add(index, 'day').format('DD');
        const isActive = weekDays[index] === day;
        const isWeekEnd = weekEndDays.indexOf(dayItem) !== -1;
        return (
          <Link
            className={classnames(
              style.dayCircles,
              {
                [style.active]: isActive,
                [style.weekend]: isWeekEnd
              }
            )}
            key={index}
            to={`/weeks/${week}/${dayItem}`}>
            <span>{dayInNumber}</span>
          </Link>
        );
      });
      header = (
        <div className={style.inner}>
          <Link to={`/weeks/${week}`}>
            <button>‹</button>
          </Link>
          {moment(week).format('MMMM')}<br />
          {dayCircles}
        </div>
      );
    }

    if (pathname === '/weeks') {
      header = (
        <div className={style.inner}>
          <Link to={`/`}>
            <button>‹</button>
          </Link>
          Historique
        </div>
      );
    }

    return (
      <header className={style.header}>
        {header}
      </header>
    );
  }
}
