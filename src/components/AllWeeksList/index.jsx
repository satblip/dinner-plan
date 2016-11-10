import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class AllWeeksList extends Component {
  static propTypes = {
    children: PropTypes.object
  }
  render () {
    return (
      <div className={style.allWeeksList}>
        <h1>All Weeks List</h1>
        <p><Link to='/'>Back to Home Screen</Link></p>
        <p><Link to='/weeks/week44'>Week 44</Link></p>
        <p><Link to='/weeks/week45'>Week 45</Link></p>
        <p><Link to='/weeks/week46'>Week 46</Link></p>
        {this.props.children}
      </div>
    );
  }
}
