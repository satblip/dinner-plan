import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import * as actions from '../actions';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...actions
  }, dispatch)
});

const mapStateToProps = reducers => ({
  weeksRecipes: reducers.weeksRecipes,
  recipes: reducers.recipes,
  weekDays: reducers.weekDays,
  weekEndDays: reducers.weekEndDays,
  currentDate: reducers.currentDate,
  currtentStartWeek: reducers.currtentStartWeek,
  currentWeek: reducers.currentWeek,
  currentWeekFirstDay: reducers.currentWeekFirstDay,
  currentWeekLastDay: reducers.currentWeekLastDay
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
