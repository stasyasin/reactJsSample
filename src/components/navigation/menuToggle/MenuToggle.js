import React from 'react'
import classes from './MenuToggle.scss'

const MenuToggle = props => {
  const cls = [
    'MenuToggle',
    'fa',
    props.isOpen ? 'fa-times Open': 'fa-bars'
  ];


  return (
  <i
    className={cls.join(' ')}
    onClick={props.onToggle}
  />
  )
}

export default MenuToggle;
