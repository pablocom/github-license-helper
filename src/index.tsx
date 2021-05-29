import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SigninCallback from './SigninCallback';

ReactDOM.render(
  <React.StrictMode>
    
      <Router>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/user/signin/callback" component={SigninCallback}></Route>
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
