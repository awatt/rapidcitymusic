import React, {Component} from 'react';

export default class PaperTitle extends Component {
    constructor(props) {
        super(props);
  }

  render() {
    return (
		<div className='paperTitle'>
			<div>{this.props.title}</div>
			<div className='clickity'>CLICK FOR LYRICS</div>
		</div>
    );
  }
}