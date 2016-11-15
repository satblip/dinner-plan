import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.scss';
import classnames from 'classnames';
import chevronRight from '../../images/chevron-right.svg';
import InlineSVG from 'svg-inline-react';

export default class WeekList extends Component {
  static propTypes = {
    params: PropTypes.object,
    children: PropTypes.object,
    weeksRecipes: PropTypes.object,
    weekEndDays: PropTypes.array
  }
  render () {
    const { week } = this.props.params;
    const { weeksRecipes, weekEndDays } = this.props;
    let weekList;
    if (weeksRecipes[week]) {
      weekList = weeksRecipes[week].map((dayItem, index) => {
        const isWeekEnd = weekEndDays.indexOf(dayItem.day) !== -1;
        return (
          <li className={classnames(
              style.listItem,
              {[style.weekend]: isWeekEnd})
            }
            key={index}>
            <Link className={style.link} to={`/weeks/${week}/${dayItem.day}`}>
              <div className={style.linkDay}>{dayItem.day}</div>
              <div className={style.linkName}>{dayItem.name}</div>
              <InlineSVG className={style.chevron} src={chevronRight} />
            </Link>
          </li>
        );
      });
    }

    return (
      <div className={style.weekList}>
        <ul className={style.list}>
          {weekList}
        </ul>
      </div>
    );
  }
}
