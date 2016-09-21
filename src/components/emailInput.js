import React, {Component} from 'react';
import './stylesheets/contact.scss';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import $ from 'jquery';
import Snackbar from 'material-ui/Snackbar';

export default class EmailInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      open: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
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

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  handleSubmit(){
    var info = 
    $.ajax({
        url: "http://localhost:3000/email",
        method: "POST",
        dataType: "json",
        data: { "email" : this.state.email, "message": this.state.message },
        cache: false,
        success: function(data) {

        console.log('email data sent via ajax: ', data)

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });

    //display 
    this.setState({
      email: '',
      message: '',
      open: true,
    });

  };

  render() {
    return (
      <div className='info'>
        <div>Get on the mailing list!  Write to me!</div>
          <div>
            <TextField
              // id="text-field-controlled"
              className='emailField'
              hintText="xxx@xxxx.com"
              floatingLabelText="Your email address"
              value={this.state.email}
              onChange={this.handleEmailChange} />
          </div>
          <div>
            <TextField
              className='emailField'
              hintText="blah blah fuck Trump ... blah di blah"
              floatingLabelText="Write me a msg (if you wanna)"
              multiLine={true}
              rows={4}
              value={this.state.message}
              onChange={this.handleMessageChange} />
          </div>

          <FlatButton label="Primary" primary={true}
            onTouchTap={this.handleSubmit}
            touch={true}
            label="SUBMIT"
            labelPosition="after"
            primary={true}
            icon={<EmailIcon />}
            >
          </FlatButton>
          <Snackbar
          open={this.state.open}
          message="You've Been Added to the Email List!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose} />
      </div>
    );
  }
}