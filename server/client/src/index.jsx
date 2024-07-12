// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Survey from './SurveyPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/survey" component={Survey} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);