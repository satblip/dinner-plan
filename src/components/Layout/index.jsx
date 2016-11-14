import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import style from './style.css';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    params: PropTypes.object,
    actions: PropTypes.object,
    weeksRecipes: PropTypes.object
  }

  render () {
    const { children } = this.props;

    return (
      <div className={style.layout}>
        <Header {...this.props} />
        <div className={style.container}>
          {React.cloneElement(children, {...this.props})}
        </div>
      </div>
    );
  }
}
