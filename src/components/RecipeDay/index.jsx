import React, { Component, PropTypes } from 'react';
import style from './style.css';

export default class RecipeDay extends Component {
  static propTypes = {
    params: PropTypes.object,
    weeksRecipes: PropTypes.object,
    weekDays: PropTypes.array
  }
  render () {
    const { day, week } = this.props.params;
    const { weeksRecipes, weekDays } = this.props;
    const index = weekDays.indexOf(day);
    const weekForThisWeek = weeksRecipes[week];
    if (!weekForThisWeek) {
      return null;
    }
    const recipe = weeksRecipes[week][index];

    return (
      <div className={style.recipeDay}>
        <h1>{recipe.day}</h1>
        <h2>{recipe.name}</h2>
        <h3>{recipe.season}</h3>
      </div>
    );
  }
}
