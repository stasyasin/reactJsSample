import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from '../../components/activeQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/finishedQuiz/FinishedQuiz';

export default class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
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
    const results = this.state.results;
    if (question.correctAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }
      this.setState({answerState: {[answerId]: 'success'}, results});
      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          this.setState({isFinished: true});
        } else {
          this.setState({ activeQuestion: this.state.activeQuestion + 1 ,
          answerState: null});
        }

        window.clearTimeout(timeout);
      }, 500);
    } else {
      results[question.id] = 'error';
      this.setState({answerState: {[answerId]: 'error', results}});
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Answer all questions:</h1>
          {this.state.isFinished? <FinishedQuiz results={this.state.results} quiz={this.state.quiz} onRetry={this.retryHandler}/>:
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
              onAnswerClick={this.onAnswerClickHandler.bind(this)}
            />
          }
        </div>
      </div>
    );
  }
}
