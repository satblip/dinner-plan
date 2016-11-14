import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';
import moment from 'moment';

export default class Content extends Component {
  static propTypes = {
    actions: PropTypes.object
  }

  populateWeek = () => {
    const today = new Date();
    const weekNumber = moment(today).week();
    this.props.actions.populateWeek(weekNumber);
  }

  render () {
    console.log(this.props);
    return (
      <div className={style.homeScreen}>
        <h1>HS</h1>
        <p><button onClick={this.populateWeek}>POPULATE_WEEK</button></p>
        <p><Link to='/weeks'>Weeks</Link></p>
      </div>
    );
  }
}
