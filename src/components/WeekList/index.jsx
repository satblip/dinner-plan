import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class WeekList extends Component {
  static propTypes = {
    params: PropTypes.object,
    children: PropTypes.object,
    weeksRecipes: PropTypes.object
  }
  render () {
    const { week } = this.props.params;
    const { weeksRecipes } = this.props;
    let weekList;
    if (weeksRecipes[week]) {
      weekList = weeksRecipes[week].map((dayItem, index) => (
        <li key={index}>
          <Link to={`/weeks/${week}/${dayItem.day}`}>
            <strong>{dayItem.day}</strong>
            <br />
            {dayItem.name}
          </Link>
        </li>
      ));
    }

    return (
      <div className={style.weekList}>
        <ul>
          {weekList}
        </ul>
      </div>
    );
  }
}
