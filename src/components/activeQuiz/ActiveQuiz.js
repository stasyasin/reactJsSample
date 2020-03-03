import React, { Component } from 'react';
import classes from './ActiveQuiz.scss';
import AnswersList from './answersList/AnswersList';

const ActiveQuiz = props => (
  <div className="ActiveQuiz">
    <p className="Question">
      <span>
        <strong>2.&nbsp;</strong>
        {props.question}
      </span>
      <small> 4 from 12</small>
    </p>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz;
