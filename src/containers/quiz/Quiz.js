import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz';

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
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
      },
      {
        id: 2,
        question: 'What is the Capital of Great Britain?',
        correctAnswerId: 2,
        answers: [
          {
            id: 1,
            text: 'Kyiv'
          },
          {
            id: 2,
            text: 'London'
          },
          {
            id: 3,
            text: 'Paris'
          },
          {
            id: 4,
            text: 'Glasgow'
          }
        ]
      }
    ]
  };

  onAnswerClickHandler(answerId) {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success' ) {
        return;
      }
    }
    const question = this.state.quiz[this.state.activeQuestion];
    if (question.correctAnswerId === answerId) {
      this.setState({answerState: {[answerId]: 'success'}});
      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          console.log('finished');
        } else {
          this.setState({ activeQuestion: this.state.activeQuestion + 1 ,
          answerState: null});
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({answerState: {[answerId]: 'error'}});
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Answer all questions:</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
            onAnswerClick={this.onAnswerClickHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}
