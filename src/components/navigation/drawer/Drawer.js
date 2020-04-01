import React, { Component } from 'react';
import classes from './Drawer.scss';
import Backdrop from '../../ui/backdrop/Backdrop';

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="">Link {link}</a>
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
