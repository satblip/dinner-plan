import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  static propTypes = {
    appName: PropTypes.string
  };
  render () {
    const {appName} = this.props;
    return (
      <header className='navbar navbar-light bg-faded'>
        <div className='container'>
          <h1>
            <Link to='/' className='navbar-brand'>{appName}</Link>
          </h1>
        </div>
      </header>
    );
  }
}
