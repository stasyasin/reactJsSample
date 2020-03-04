import React, { Component } from 'react';
import classes from './ActiveQuiz.scss';
import AnswersList from './answersList/AnswersList';

const ActiveQuiz = props => (
  <div className="ActiveQuiz">
    <p className="Question">
      <span>
        <strong>{props.answerNumber}.&nbsp;</strong>
        {props.question}
      </span>
      <small> {props.answerNumber} from {props.quizLength}</small>
    </p>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
);

export default ActiveQuiz;
