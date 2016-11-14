import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';
import moment from 'moment';

export default class Content extends Component {
  static propTypes = {
    actions: PropTypes.object,
    currentDate: PropTypes.number,
    currentWeek: PropTypes.number,
    currentWeekFirstDay: PropTypes.number,
    currentWeekLastDay: PropTypes.number,
    weeksRecipes: PropTypes.object,
    history: PropTypes.object
  }

  populateWeek = () => {
    this.props.actions.populateWeek();
    this.props.history.push(`/weeks/${this.props.currentWeek}`);
  }

  render () {
    const {
      currentDate,
      currentWeek,
      currentWeekFirstDay,
      currentWeekLastDay,
      weeksRecipes
    } = this.props;

    let homeButton = (
      <div>
        <p>Il n'y a aucune recettes pour cette semaine.</p>
        <button onClick={this.populateWeek}>
          Générer une semaine de recettes
        </button>
      </div>
    );

    if (weeksRecipes[currentWeek]) {
      homeButton = (
        <div>
          <Link to={`/weeks/${currentWeek}`}>
            Accéder aux recette de la semaine
          </Link>
        </div>
      );
    }

    return (
      <div className={style.homeScreen}>
        <h1 className={style.month}>
          {moment(currentDate).format('MMMM')}
        </h1>
        <h2>Semaine {currentWeek}</h2>
        <h3>{`(${currentWeekFirstDay}→${currentWeekLastDay})`}</h3>

        {homeButton}

        <p><Link to='/weeks'>Consulter la liste des semaines</Link></p>
      </div>
    );
  }
}
