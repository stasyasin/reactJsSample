import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz';

export default class Quiz extends Component {

  state = {
    quiz: [
      {
        id: 1,
        question: 'What is the color of sky?',
        correctAnswerId: 3,
        answers: [
          {
            id: 1,
            text: 'Black'
          },
          {
            id: 2,
            text: 'Yellow'
          },
          {
            id: 3,
            text: 'Blue'
          },
          {
            id: 4,
            text: 'Green'
          }
        ]
      }
    ]
  };

  onAnswerClickHandler(answerId) {
    console.log('Here we go');
    console.log('answerId: ', answerId);
  };

  render() {
    return(
    <div className="Quiz">
      <div className="QuizWrapper">
        <h1>Answer all questions:</h1>
        <ActiveQuiz
          answers={this.state.quiz[0].answers}
          question={this.state.quiz[0].question}
          onAnswerClick={this.onAnswerClickHandler.bind(this)}
        />
      </div>

    </div>
  )
  }
}
