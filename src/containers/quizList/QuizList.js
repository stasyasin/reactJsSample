import React, { Component } from 'react';
import classes from './QuizList.scss';
import { NavLink } from 'react-router-dom';

export default class QuizList extends Component {
  renderQuizes() {
    return ['1', '2', '3'].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz} exact={true}>
            Quiz {quiz}
          </NavLink>
        </li>
      )
    });
}

  render() {
    return (
      <div className="QuizList">
        <div>
          <h1>Quiz list</h1>
          <ul>
            { this.renderQuizes()}
          </ul>
        </div>
      </div>
    );
  }
}
