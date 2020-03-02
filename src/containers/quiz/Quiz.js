import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz';

export default class Quiz extends Component {

  state = {
    quiz: [
      {
        answers: [
          {
            text: 'Answer 1'
          },
          {
            text: 'Answer 2'
          },
          {
            text: 'Answer 3'
          },
          {
            text: 'Answer 4'
          }
        ]
      }
    ]
  };

  render() {
    return(
    <div className="Quiz">
      <div className="QuizWrapper">
        <h1>Answer all questions:</h1>
        <ActiveQuiz answers={this.state.quiz[0].answers}/> </div>

    </div>
  )
  }
}
