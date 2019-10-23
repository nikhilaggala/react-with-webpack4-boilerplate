import React, { Component } from 'react';
import PropTypes from 'prop-types';

import myImage from '../../../static/images/me.png'
import classes from './index.css';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light'
    };
  }
  changeTheme = () => {
    const { theme } = this.state;

    if (theme === 'light') {
      return this.setState({
        theme: 'dark'
      }, () => {
        document.documentElement.setAttribute('data-theme', 'dark');
      });
    }

    return this.setState({
      theme: 'light'
    }, () => {
      document.documentElement.setAttribute('data-theme', 'light');
    });
  }

  renderContent = () => {
    const { theme } = this.state;

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
        <div className={classes.button} onClick={this.changeTheme}>
          Change theme
        </div>
        {this.renderContent()}
      </div>
    );
  }
}
