import React, { Component } from 'react';
import classes from './Layout.scss';
import MenuToggle from '../../components/navigation/menuToggle/MenuToggle';
import Drawer from '../../components/navigation/drawer/Drawer';

export default class Layout extends Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    return (
      <div className="Layout">
        <Drawer isOpen={this.state.menu}/>
        <MenuToggle onToggle={this.toggleMenuHandler} isOpen={this.state.menu}/>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
