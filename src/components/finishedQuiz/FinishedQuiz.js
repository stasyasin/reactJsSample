import React  from 'react';
import classes from './FinishedQuiz.scss';

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
        <button onClick={props.onRetry}>Retry</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
