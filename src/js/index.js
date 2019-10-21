import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import AppRoot from './AppRoot';

// import createStore from './redux/store';

// const store = createStore();

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <Component />
    </Router>,
    document.getElementById('app-root')
  );
};

render(AppRoot);
