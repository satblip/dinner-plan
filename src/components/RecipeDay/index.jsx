import React, { Component, PropTypes } from 'react';
import style from './style.scss';

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
        <div className={style.header}>
          <h1 className={style.title}>{recipe.day}</h1>
          <h2 className={style.subtitle}>{recipe.name}</h2>
          <h3 className={style.note}>{recipe.season}</h3>
        </div>
        <div className={style.content}>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.
        </div>
      </div>
    );
  }
}
