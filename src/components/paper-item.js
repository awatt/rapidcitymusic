import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './stylesheets/paper-item.scss';

export default class PaperItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
          open: false,
      };

      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {

    const actions = [
      this.props.playerWidget,
      <RaisedButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose} />,
    ];

    const content = [
        <img src={this.props.img_sm} className='paperImg' />,
        this.props.lyrics,
    ];

    const paperStyle = {
      height: 250,
      width: 250,
      margin: 20,
      textAlign: 'center',
      overflow: 'hidden',
      display: 'inline-block',
    };

    return (
      <div>
        <Paper onTouchTap={this.handleAboutDialogOpen} style={paperStyle} zDepth={1} children={content} circle={true} />
        <Dialog
          actions={actions}
          modal={false}
          children={this.props.img_lg}
          open={this.state.open}
          onRequestClose={this.handleClose} />
      </div>
    );
  }
}
