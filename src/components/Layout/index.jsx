import React, { Component, PropTypes } from 'react';
import Header from '../Header';
import style from './style.scss';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    params: PropTypes.object,
    actions: PropTypes.object,
    weeksRecipes: PropTypes.object
  }
  render () {
    return (
      <div className={style.layout}>
        <Header {...this.props} />
        <div className={style.container}>
          {React.cloneElement(this.props.children, {...this.props})}
        </div>
      </div>
    );
  }
}
