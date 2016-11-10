import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class Header extends Component {
  static propTypes = {
    activePage: PropTypes.object
  }
  render () {
    const { day, week } = this.props.activePage;
    let header = null;
    if (week) {
      header = (
        <div className={style.inner}>
          <Link to='/weeks'>
            <button>‹</button>
          </Link>
          {week}
        </div>
      );
    }
    if (day) {
      header = (
        <div className={style.inner}>
          <Link to={`/weeks/${week}`}>
            <button>‹</button>
          </Link>
          {day}
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
