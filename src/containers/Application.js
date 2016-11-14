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
  weekRecipes: reducers.weekRecipes,
  recipes: reducers.recipes,
  weekDays: reducers.weekDays,
  weekEndDays: reducers.weekEndDays,
  weekNumber: reducers.weekNumber
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
