import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class RecipeDay extends Component {
  static propTypes = {
    params: PropTypes.object
  }
  render () {
    const { params } = this.props;
    return (
      <div className={style.recipeDay}>
        <h1>Recipe Day {params.day} for {params.week}</h1>
        <p><Link to={`/weeks/${params.week}`}>Back to week</Link></p>
      </div>
    );
  }
}
