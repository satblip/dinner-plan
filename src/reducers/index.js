import * as constants from '../constants';

const initialState = {
  currentDate: null,
  currentWeek: null,
  currentMonth: null,
  currentWeekFirstDay: null,
  currentWeekLastDay: null,
  recipes: [],
  weekDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  weekEndDays: ['Samedi', 'Dimanche'],
  weeksRecipes: {}
};

export default function populateWeek (state = initialState, action) {
  switch (action.type) {
    case constants.POPULATE_WEEK: {
      let recipesUnused = state.recipes;
      let recipesForThisWeek = [];

      state.weekDays.map(day => {
        const randomRecipe = Math.floor(Math.random() * recipesUnused.length);
        const recipe = recipesUnused[randomRecipe];
        if (recipe) {
          recipesUnused = recipesUnused.filter((e, i) => i !== randomRecipe);
          recipesForThisWeek.push({
            day,
            isWeekEnd: state.weekEndDays.indexOf(day) !== -1,
            name: recipe.name,
            season: recipe.season
          });
        }
      });

      const weeksRecipes = Object.assign({}, state.weeksRecipes, {
        [state.currentWeek]: recipesForThisWeek
      });

      return Object.assign({}, state, {
        weeksRecipes
      });
    }

    case constants.FETCH_DATA: {
      return Object.assign({}, state, {
        recipes: action.data.recipes
      });
    }

    case constants.SET_CURRENT_DATE: {
      return Object.assign({}, state, {
        currentDate: action.currentDate,
        currentWeek: action.currentWeek,
        currentWeekFirstDay: action.currentWeekFirstDay,
        currentWeekLastDay: action.currentWeekLastDay
      });
    }

    default:
      return state;
  }
}
