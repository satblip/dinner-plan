import React, { Component } from 'react';
import DinnerDay from './DinnerDay.jsx';
import { default as $ } from 'jquery';

export default class Content extends Component {
  static defaultProps = {
    weekDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    weekEndDays: ['Samedi', 'Dimanche']
  }

  componentWillMount () {
    $.ajax({
      url: './recipes.json',
      dataType: 'json',
      cache: false,
      success: (recipes) => {
        console.log('ajax success: ', recipes);
        this.setState({ recipes });
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
  }

  getRecipes () {
    if (this.state && this.state.recipes) {
      return this.state.recipes;
    }
    return [];
  }

  getDinnerPlan () {
    let recipes = this.getRecipes();
    const {weekDays, weekEndDays} = this.props;

    if (recipes.length > 0) {
      return weekDays.map((day, index) => {
        const random = Math.floor(Math.random() * recipes.length);
        const recipesItem = recipes[random];
        recipes = [
          ...recipes.slice(0, random),
          ...recipes.slice(random + 1)
        ];
        const isWeekEnd = weekEndDays.indexOf(day) !== -1;
        console.log(recipesItem);
        if (recipesItem) {
          return (
            <DinnerDay key={index}
              isWeekEnd={isWeekEnd}
              day={day}
              name={recipesItem.name}
              period={recipesItem.period}
            />
          );
        }
      });
    }
  }

  render () {
    return (
      <div className='content'>
        <br/>
        <ul className='list-group'>
          {this.getDinnerPlan()}
        </ul>
      </div>
    );
  }
}
