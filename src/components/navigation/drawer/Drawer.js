import React, {Component} from 'react'
import classes from './Drawer.scss'

const links = [1, 2, 3]

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="">Link {link}</a>
        </li>
      )
    })
  }

  render() {
    const cls = [
      'Drawer',
      !this.props.isOpen? 'Close': ''
    ];

    return(
      <nav className={cls.join(' ')}>
        <ul>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

export default Drawer;
