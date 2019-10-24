import React, { Component } from 'react';
import PropTypes from 'prop-types';

import myImage from '../../../static/images/me.png'
import classes from './index.css';

export default class HomePage extends Component {
  renderContent = () => {
    const text = `Nikhil Aggala's Page.`

    return (
      <div className={classes.content}>
        <div className={classes.imageContainer}>
          <img
          src={myImage}
          alt="my-image"
          title="Nikhil Aggala"
          className={classes.myImage}
          />
        </div>
        <div className={classes.description}>
          {text}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={classes.pageContainer}>
        {this.renderContent()}
      </div>
    );
  }
}
