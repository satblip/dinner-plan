import * as constants from '../constants';

export const populateWeek = weekNumber => {
  return {
    type: constants.POPULATE_WEEK,
    weekNumber
  };
};

export const fetchData = data => {
  return {
    type: constants.FETCH_DATA,
    data
  };
};

export const getCurrentWeekNumber = weekNumber => {
  return {
    type: constants.GET_CURRENT_WEEK_NUMBER,
    weekNumber
  };
};
