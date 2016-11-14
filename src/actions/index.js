import * as constants from '../constants';

export const populateWeek = () => {
  return {
    type: constants.POPULATE_WEEK
  };
};

export const fetchData = data => {
  return {
    type: constants.FETCH_DATA,
    data
  };
};

export const setCurrentDate = date => {
  return {
    type: constants.SET_CURRENT_DATE,
    currentDate: date.valueOf(),
    currentWeek: date.isoWeek(),
    currentWeekFirstDay: parseInt(date.format('Do'), 10),
    currentWeekLastDay: parseInt(date.add(6, 'days').format('Do'), 10)
  };
};
