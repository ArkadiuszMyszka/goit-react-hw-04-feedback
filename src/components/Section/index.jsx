import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
