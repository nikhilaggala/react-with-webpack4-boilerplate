import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';

import { routes } from '../routes';
import classes from './index.css'

// const history = createBrowserHistory();

export default class AppRoot extends Component {
  // static propTypes = {
  //   store: PropTypes.object.isRequired,
  //   routes: PropTypes.func.isRequired,
  // };


  render() {
    // const { routes, store } = this.props;
    return (
      // <Provider store={store}>
        <div className={classes.app}>
          <Switch>
            {
              routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))
            }
          </Switch>
        </div>
      // </Provider>
    );
  }
}

// For rendering sub routes
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
