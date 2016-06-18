import React, {Component} from 'react';
import './stylesheets/contact.scss'
import TextField from 'material-ui/TextField';

export default class EmailInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Email Address',
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    console.log('e.target.value', e.target.value)
    console.log('this.state.value', this.state.value)
  };

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}