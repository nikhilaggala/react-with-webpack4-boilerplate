import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import AppRoot from './AppRoot';

import classes from '../styles/app.css'

// import createStore from './redux/store';

// const store = createStore();

const render = (Component) => {
  ReactDOM.render(
    <div className={classes.app}>
      <Router>
        <Component />
      </Router>
    </div>,
    document.getElementById('app-root')
  );
};

render(AppRoot);
