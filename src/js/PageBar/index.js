import React, { Component } from 'react';

import classes from './index.css'

export default class PageBar extends Component {
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

  renderThemeToggle = () => {
    return (
      <div className={classes.button} onClick={this.changeTheme}>
        Change theme
      </div>
    );
  }

  render() {
    return (
      <div className={classes.container}>
        {this.renderThemeToggle()}
      </div>
    );
  }
}
