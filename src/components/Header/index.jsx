import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.scss';
import moment from 'moment';
import classnames from 'classnames';
import chevronLeft from '../../images/chevron-left.svg';
import InlineSVG from 'svg-inline-react';

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
    const chevron = <InlineSVG className={style.chevron} src={chevronLeft} />;

    let header = null;
    if (week) {
      header = (
        <div className={style.inner}>
          <Link to='/weeks'>
            {chevron}
          </Link>
          <div className={style.title}>
            {moment(week).format('MMMM')}
          </div>
          <div className={style.subtitle}>
            Semaine {moment(week).isoWeek()}
          </div>
        </div>
      );
    }

    if (day) {
      const dayCircles = weekDays.map((dayItem, index) => {
        const dayInNumber = moment(week).add(index, 'day').format('DD');
        const isActive = weekDays[index] === day;
        const isWeekEnd = weekEndDays.indexOf(dayItem) !== -1;
        return (
          <Link className={classnames(
            style.dayCircles,
            {
              [style.active]: isActive,
              [style.weekend]: isWeekEnd
            })}
            key={index}
            to={`/weeks/${week}/${dayItem}`}>
            <div className={style.dayCirclesNumber}>
              {dayInNumber}
            </div>
          </Link>
        );
      });

      header = (
        <div className={style.inner}>
          <Link className={style.link} to={`/weeks/${week}`}>
            {chevron}
          </Link>
          <div className={style.titleTop}>
            {moment(week).format('MMMM')}
          </div>
          <div className={style.dayCirclesContainer}>
            {dayCircles}
          </div>
        </div>
      );
    }

    if (pathname === '/weeks') {
      header = (
        <div className={style.inner}>
          <Link className={style.link} to='/'>
            {chevron}
          </Link>
          <div className={style.title}>
            Historique
          </div>
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
