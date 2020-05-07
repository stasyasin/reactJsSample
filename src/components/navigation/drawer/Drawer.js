import React, { Component } from 'react';
import classes from './Drawer.scss';
import Backdrop from '../../ui/backdrop/Backdrop';
import {NavLink} from 'react-router-dom';

const links = [
  {to: '/', label:'List', exact: true},
  {to: '/auth', label:'Login', exact: false},
  {to: '/quiz-creator', label:'Create a quiz', exact: false}
];

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact} activeClassName={classes.active} onClick={this.clickHandler}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = [
      'Drawer',
      !this.props.isOpen ? 'Close' : ''
    ];

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen? <Backdrop onClick={this.props.onClose}/>: null}
      </React.Fragment>
    );
  }
}

export default Drawer;
