import React, { Component } from 'react';
import classes from './AnswersList.scss';
import AnswerItem from './answerItem/AnswerItem';

const AnswersList  = props => (
  <ul className="AnswersList">
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem key={index} answer={answer}/>
      )
    })}
  </ul>
)

export default AnswersList;
