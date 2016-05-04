import React, { Component, PropTypes } from 'react';
import Header from './Header.jsx';

export default class Layout extends Component {
  static defaultProps = {
    appName: 'Dinner Plan'
  }

  static propTypes = {
    appName: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
  }

  render () {
    const {children, appName} = this.props;
    return (
      <div>
        <Header appName={appName}/>
        <div className='container'>
          {children}
        </div>
      </div>
    );
  }
}
