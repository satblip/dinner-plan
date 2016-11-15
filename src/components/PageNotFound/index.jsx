import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.scss';

export default class PageNotFound extends Component {
  static propTypes = {
    param: PropTypes.object,
    children: PropTypes.object
  }
  render () {
    return (
      <div className={style.pageNotFound}>
        <h1>404 Page not found</h1>
        <p><Link to='/'>Back to home page</Link></p>
      </div>
    );
  }
}
