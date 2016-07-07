import React, {Component} from 'react';
import './stylesheets/paper-title.scss';

export default class PaperTitle extends Component {
    constructor(props) {
        super(props);
  }

  render() {
    return (
      <div className='paperTitle'>{this.props.title}</div>
    );
  }
}