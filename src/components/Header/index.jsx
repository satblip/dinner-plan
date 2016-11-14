import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class Header extends Component {
  static propTypes = {
    params: PropTypes.object,
    location: PropTypes.object,
    weeksRecipes: PropTypes.object
  }
  render () {
    const { day, week } = this.props.params;
    const { pathname } = this.props.location;
    const { weeksRecipes } = this.props;

    let header = null;
    if (week) {
      header = (
        <div className={style.inner}>
          <Link to='/weeks'>
            <button>‹</button>
          </Link>
          Semaine {week}
        </div>
      );
    }

    if (day) {
      const recipeForThisDay = weeksRecipes[week][day];
      header = (
        <div className={style.inner}>
          <Link to={`/weeks/${week}`}>
            <button>‹</button>
          </Link>
          {recipeForThisDay.day}<br />
          <small>{recipeForThisDay.name}</small>
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
