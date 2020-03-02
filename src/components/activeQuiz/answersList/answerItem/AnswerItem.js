import React, { Component } from 'react';
import classes from './AnswerItem.scss';

const AnswerItem = props => {
  return <li className="AnswerItem">{props.answer.text}</li>;
};

export default AnswerItem;
