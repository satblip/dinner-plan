import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import style from './style.css';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object,
    params: PropTypes.object,
    actions: PropTypes.object
  }

  render () {
    const { children, params } = this.props;
    return (
      <div className={style.layout}>
        <Header activePage={params} />
        <div className={style.container}>
          {React.cloneElement(children, {...this.props})}
        </div>
      </div>
    );
  }
}
