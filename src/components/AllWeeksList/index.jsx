import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.scss';
import moment from 'moment';
import chevronRight from '../../images/chevron-right.svg';
import InlineSVG from 'svg-inline-react';

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
          <Link className={style.link} key={index} to={`/weeks/${week}`}>
            Semaine {weekNumber}
            <span className={style.month}>{month}</span>
            <InlineSVG className={style.chevron} src={chevronRight} />
          </Link>
        );
      });

    return (
      <div className={style.allWeeksList}>
        {weekLinks}
      </div>
    );
  }
}
