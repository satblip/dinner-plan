import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import style from './style.scss';
import moment from 'moment';
import logo from '../../images/logo.svg';
import InlineSVG from 'svg-inline-react';

export default withRouter(class Content extends Component {
  static propTypes = {
    actions: PropTypes.object,
    currentDate: PropTypes.number,
    currentWeek: PropTypes.number,
    currtentStartWeek: PropTypes.string,
    currentWeekFirstDay: PropTypes.number,
    currentWeekLastDay: PropTypes.number,
    weeksRecipes: PropTypes.object,
    router: PropTypes.object
  }

  populateWeek = () => {
    this.props.actions.populateWeek();
    this.props.router.push(`/weeks/${this.props.currtentStartWeek}`);
  }

  render () {
    const {
      currentDate,
      currentWeek,
      currtentStartWeek,
      currentWeekFirstDay,
      currentWeekLastDay,
      weeksRecipes
    } = this.props;

    let homeButton = (
      <div className={style.buttonContainer}>
        <div className={style.note}>
          Il n'y a aucune recettes pour cette semaine.
        </div>
        <button className={style.button} onClick={this.populateWeek}>
          Générer une semaine de recettes
        </button>
      </div>
    );

    if (weeksRecipes[currtentStartWeek]) {
      homeButton = (
        <div className={style.buttonContainer}>
          <Link className={style.button} to={`/weeks/${currtentStartWeek}`}>
            Accéder aux recette de la semaine
          </Link>
        </div>
      );
    }

    return (
      <div className={style.homeScreen}>
        <div className={style.logo}>
          <InlineSVG src={logo} />
          <div className={style.logoCurrentWeek}>
            {currentWeek}
          </div>
        </div>

        <h1 className={style.month}>
          {moment(currentDate).format('MMMM')}
        </h1>
        <h2 className={style.week}>
          Semaine {currentWeek} {
            `(${currentWeekFirstDay}→${currentWeekLastDay})`
          }
        </h2>

        {homeButton}

        <Link className={style.link} to='/weeks'>
          Consulter la liste des semaines
        </Link>
      </div>
    );
  }
});
