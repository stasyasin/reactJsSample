import React  from 'react';
import classes from './FinishedQuiz.scss';
import Button from '../ui/button/Button';
import {Link} from 'react-router-dom';

const FinishedQuiz = props => {
  const successNumber = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            props.results[quizItem.id] === 'error' ? 'error' : 'success'
          ];
          return(
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp; {quizItem.question}
              <i className={cls.join(' ')}></i>
            </li>
          )
        })}
      </ul>
      <p>Correct {successNumber} from {props.quiz.length} answers</p>
      <div>
        <Button onClick={props.onRetry} type="primary">Retry</Button>
        <Link to='/'>
          <Button onClick={props.onRetry} type="success">View Quiz list</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz
