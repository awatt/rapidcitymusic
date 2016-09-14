import React, {Component} from 'react';
import './stylesheets/contact.scss';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import $ from 'jquery';
// import emailer from './emailer.js';

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
    console.log("email changed")
    this.setState({
      email: e.target.value,
    });
  };

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit(){
    console.log('EMAIL SUBMIT HANDLER REACHED')
    $.ajax({
        // url: '/email',
        url: 'http://localhost:3000/email',
        method: 'POST',
        dataType: 'json',
        cache: false,
        success: function(data) {
        // Success..
        console.log('ajax request sent from react component')
        console.log('data passed into react component: ', data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });

  };

// componentDidMount(){
//                $.ajax({
//         url: '/email',
//         method: 'POST',
//         dataType: 'json',
//         cache: false,
//         success: function(data) {
//         // Success..
//         console.log('ajax request sent from react component')
//         console.log('data passed into react component: ', data)
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(status, err.toString());
//       }.bind(this)
//     });
//   }


    // emailer(this.state.email, this.state.message);



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