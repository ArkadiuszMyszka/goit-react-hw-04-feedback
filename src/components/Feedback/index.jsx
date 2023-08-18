import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export class Feedback extends Component {
  static propTypes = {
    options: PropTypes.object,
    onClick: PropTypes.func,
  };

  handleClick = e => {
    const name = e.target.textContent.toLowerCase();
    this.props.onLeaveFeedback(name);
  };

  render() {
    return (
      <div className={styles.container}>
        <button className={styles.btn} onClick={this.handleClick}>
          Good
        </button>
        <button className={styles.btn} onClick={this.handleClick}>
          Neutral
        </button>
        <button className={styles.btn} onClick={this.handleClick}>
          Bad
        </button>
      </div>
    );
  }
}

export default Feedback;
