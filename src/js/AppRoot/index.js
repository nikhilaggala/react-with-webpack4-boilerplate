import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';

import { routes } from '../routes';

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
        <Switch>
          {
            routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
        </Switch>
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
