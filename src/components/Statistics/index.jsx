import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
    );
  }
}

export default Statistics;
