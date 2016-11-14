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

    const weekList = weeksRecipes[week].map((day, index) => (
      <li key={index}>
        <Link to={`/weeks/${week}/${index}`}>
          <strong>{day.day}</strong>
          <br />
          {day.name}
        </Link>
      </li>
    ));

    return (
      <div className={style.weekList}>
        <ul>
          {weekList}
        </ul>
      </div>
    );
  }
}
