import React, {Component} from 'react';
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
      isEmail: false,
      message: '',
      open: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  handleEmailChange(e) {
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
      this.setState({
      email: e.target.value,
      isEmail: validateEmail(e.target.value),
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

    var newEmail = this.state.email;
    var requestText = newEmail + ' would like to join the Rapid City mailing list!  Message: ' + this.state.message;
    var confirmText = "You've been added to the Rapid City Mailing List!";

    
    $.ajax({
        url: "http://localhost:3000/email",
        method: "POST",
        dataType: "json",
        data: { 
          "email" : 'rapidcitymail@gmail.com',
          "subject": 'RapidCityMusic Email List Submission',
          "message": requestText
        },
        cache: false,
        success: function(data) {

          //send out confirm email to requester
          $.ajax({
            url: "http://localhost:3000/email",
            method: "POST",
            dataType: "json",
            data: { 
              "email" : newEmail,
              "subject": 'Thank You!',
              "message": confirmText
            },
            cache: false,
            success: function(data) {
              console.log("mail confirm succeeded: ", data)

            }.bind(this),
            error: function(xhr, status, err) {
              console.error(status, err.toString());
            }.bind(this)
          });

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });

    //clear display 
    this.setState({
      email: '',
      isEmail: false,
      message: '',
      open: true,
    });

  };

  render() {
    return (
      <div className='info'>
          <div className='emailTitle'>
            <h2>MAILING LIST</h2>
            <p className='emailSubTitle'>join for show dates and other news<br/>(no spam)!</p>
          </div>
        <div className='emailFields'>
              <div>
                <TextField
                  hintText="xxx@xxxx.com/org/net"
                  floatingLabelText="enter your email address"
                  floatingLabelFocusStyle={{color: 'rgba(209, 72, 21, 0.9)'}}
                  underlineFocusStyle={{borderColor: 'rgba(209, 72, 21, 0.9)'}}
                  value={this.state.email}
                  onChange={this.handleEmailChange} />
              </div>
              <div>
                <TextField
                  floatingLabelText="write me a msg (if you wanna)"
                  floatingLabelFocusStyle={{color: 'rgba(209, 72, 21, 0.9)'}}
                  underlineFocusStyle={{borderColor: 'rgba(209, 72, 21, 0.9)'}}
                  multiLine={true}
                  rows={8}
                  value={this.state.message}
                  onChange={this.handleMessageChange} />
              </div>
        </div>

        <div className="submitButton">
          <FlatButton label="Primary" primary={true}
            onTouchTap={this.handleSubmit}
            touch={true}
            disabled={!this.state.isEmail}
            label="JOIN"
            labelStyle={{color: this.state.isEmail ? 'rgba(232, 175, 12, 0.9)' : 'rgba(232, 175, 12, 0.2)', fontSize: '22px', letterSpacing: '8px'}}
            >
          </FlatButton>
        </div>
          <Snackbar
          open={this.state.open}
          className='snackbarRoot'
          message="NOICE!"
          autoHideDuration={2000}
          style={{ color: 'rgba(232, 12, 122, 0.7)'}}
          bodyStyle={{ minWidth: 'none', backgroundColor: 'black'}}
          onRequestClose={this.handleRequestClose} />
      </div>
    );
  }
}