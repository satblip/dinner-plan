import React, { Component, PropTypes } from 'react';

export default class DinnerDay extends Component {
  static propTypes = {
    day: PropTypes.string.isRequired,
    isWeekEnd: PropTypes.bool,
    name: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired
  }
  render () {
    const {day, isWeekEnd, name, period} = this.props;
    return (
      <li className={ `list-group-item ${isWeekEnd ? 'disabled' : ''}` }>
        <h4 className='list-group-item-heading'>{day}</h4>
        <p className='list-group-item-text'>{name}</p>
      </li>
    );
  }
}
