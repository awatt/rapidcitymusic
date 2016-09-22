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

    const buttonStyles = {

    }


  };

  render() {
    return (
      <div className='info'>
        <h3 className='emailTitle'>Join the MAILING LIST for news and announcements (NO SPAM!)</h3>
        <div className='emailFields'>
              <div>
                <TextField
                  hintText="xxx@xxxx.com"
                  floatingLabelText="enter your email address"
                  value={this.state.email}
                  onChange={this.handleEmailChange} />
              </div>
              <div>
                <TextField
                  floatingLabelText="write me a msg (if you wanna)"
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
            label="JOIN"
            // labelPosition="after"
            // labelStyle={{color: 'rgba(255, 238, 13, 0.6)'}}
            // labelStyle={{color: 'rgba(178, 0, 0, 0.6)'}}
            labelStyle={{color: 'rgba(255, 238, 13, 0.8)', fontSize: '22px', letterSpacing: '8px'}}
            // icon={<EmailIcon style={{fill:'red'}} />}
            >
          </FlatButton>
        </div>
          <Snackbar
          open={this.state.open}
          message="You've Been Added to the Email List!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose} />
      </div>
    );
  }
}