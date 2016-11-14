import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class RecipeDay extends Component {
  static propTypes = {
    params: PropTypes.object,
    weeksRecipes: PropTypes.object
  }
  render () {
    const { day, week } = this.props.params;
    const { params, weeksRecipes } = this.props;
    const data = weeksRecipes[week][day];
    return (
      <div className={style.recipeDay}>
        <h1>{data.season}</h1>

        <p>
          <Link to={`/weeks/${params.week}`}>Back to week</Link>
        </p>
      </div>
    );
  }
}
