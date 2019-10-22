import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './index.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className={classes.pageContainer}>
        Nikhil Aggala's page.
      </div>
    );
  }
}
