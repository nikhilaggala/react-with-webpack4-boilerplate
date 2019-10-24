import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import AppRoot from './AppRoot';
import PageBar from './PageBar';

import classes from '../styles/app.css'

// import createStore from './redux/store';

// const store = createStore();

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <div className={classes.appContainer}>
        <PageBar />
        <Component />
      </div>
    </Router>,
    document.getElementById('app-root')
  );
};

render(AppRoot);
