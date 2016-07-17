import React, {Component} from 'react';
import './stylesheets/contact.scss';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import emailer from './emailer.js';

export default class EmailInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: 'Email Address',
      message: 'Message (optional)'
    };

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  };

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit() {
    emailer(this.state.email, this.state.message);
  };

  render() {
    return (
      <div class='info'>
        <TextField
          id="text-field-controlled"
          value={this.state.email}
          onChange={this.handleEmailChange} />
          <TextField
          id="text-field-controlled"
          value={this.state.message}
          onChange={this.handleMessageChange} />

          <FloatingActionButton
          onTouchTap={this.handleSubmit}
          touch={true}
          >
          <EmailIcon />
          </FloatingActionButton>
      </div>
    );
  }
}