import * as constants from '../constants';

const initialState = {
  weekRecipes: [],
  recipes: [],
  weekDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  weekEndDays: ['Samedi', 'Dimanche'],
  weekNumber: null
};

export default function populateWeek (state = initialState, action) {
  switch (action.type) {
    case constants.POPULATE_WEEK: {
      if (action.weekNumber) {
        let recipesUnused = state.recipes;
        let weekRecipes = [];

        state.weekDays.map(day => {
          const randomRecipe = Math.floor(Math.random() * recipesUnused.length);
          const recipe = recipesUnused[randomRecipe];
          if (recipe) {
            recipesUnused = recipesUnused.filter((e, i) => i !== randomRecipe);
            weekRecipes = weekRecipes.concat([{
              day,
              isWeekEnd: state.weekEndDays.indexOf(day) !== -1,
              name: recipe.name,
              season: recipe.season
            }]);
          }
        });

        return Object.assign({}, state, {
          weekRecipes
        });
      }
      return state;
    }

    case constants.FETCH_DATA: {
      return Object.assign({}, state, {
        recipes: action.data.recipes
      });
    }

    case constants.GET_CURRENT_WEEK_NUMBER: {
      return Object.assign({}, state, {
        weekNumber: action.weekNumber
      });
    }

    default:
      return state;
  }
}
