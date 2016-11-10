import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export default class WeekList extends Component {
  static propTypes = {
    params: PropTypes.object,
    children: PropTypes.object
  }
  render () {
    const { params } = this.props;
    return (
      <div className={style.weekList}>
        <h1>WeekList: {params.week}</h1>
        <p><Link to='/weeks'>Back to weeks</Link></p>
        <p><Link to={`/weeks/${params.week}/lundi`}>Lundi</Link></p>
        <p><Link to={`/weeks/${params.week}/mardi`}>Mardi</Link></p>
        <p><Link to={`/weeks/${params.week}/mercredi`}>Mercredi</Link></p>
        <p><Link to={`/weeks/${params.week}/jeudi`}>Jeudi</Link></p>
        <p><Link to={`/weeks/${params.week}/vendredi`}>Vendredi</Link></p>
        <p><Link to={`/weeks/${params.week}/samedi`}>Samedi</Link></p>
        <p><Link to={`/weeks/${params.week}/dimanche`}>Dimanche</Link></p>
        {this.props.children}
      </div>
    );
  }
}
