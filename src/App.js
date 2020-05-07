import React from 'react';
import Layout from "./hoc/layout/Layout";
import Quiz from './containers/quiz/Quiz'
import {Route, Switch} from 'react-router-dom'
import QuizCreator from './containers/quizCreator/QuizCreator';
import Auth from './containers/auth/Auth';
import QuizList from './containers/quizList/QuizList';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/quiz-creator" component={QuizCreator}/>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="/" component={QuizList}/>
      </Switch>
    </Layout>
  );
}

export default App;
