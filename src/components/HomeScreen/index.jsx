import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import json from '!json!../../recipes.json';
import style from './style.css';

export default class Content extends Component {
  constructor (state) {
    super(state);
    this.state = {
      recipes: [],
      recipesUsed: []
    };
  }

  static propTypes = {
    weekDays: PropTypes.array,
    weekEndDays: PropTypes.array
  }

  static defaultProps = {
    weekDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    weekEndDays: ['Samedi', 'Dimanche']
  }

  // generateWeekRecipes () {
  //   const recipes = json.recipes;
  //   let recipesUnused = recipes;
  //   let recipesToRender = [];
  //
  //   this.props.weekDays.map(day => {
  //     const randomRecipe = Math.floor(Math.random() * recipesUnused.length);
  //     const recipeItem = recipes[randomRecipe];
  //     if (recipeItem) {
  //       recipesUnused = recipesUnused.filter((e, i) => i !== randomRecipe);
  //       recipesToRender = recipesToRender.concat([{
  //         day,
  //         isWeekEnd: this.props.weekEndDays.indexOf(day) !== -1,
  //         name: recipeItem.name,
  //         season: recipeItem.season
  //       }]);
  //     }
  //   });
  //
  //   this.setState({
  //     recipes,
  //     recipesUnused,
  //     recipesToRender
  //   });
  // }

  render () {
    return (
      <div className={style.homeScreen}>
        <h1>Home screen</h1>
        <Link to='/weeks'>Weeks</Link>
      </div>
    );
  }
}
