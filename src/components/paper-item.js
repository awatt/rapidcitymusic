import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DialogContent from './dialog-content.js';
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

    const paperStyle = {
      height: 250,
      width: 250,
      margin: 30,
      textAlign: 'center',
      overflow: 'hidden',
      display: 'inline-block',
    };

    const styles = {
      dialogRoot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
      },
      dialogContent: {
        position: 'relative',
        width: '100%',
        maxWidth: 'none',
      },
      dialogBody: {
        paddingBottom: 0
      }
    };

    return (
      <span>
        <Paper onTouchTap={this.handleOpen} style={paperStyle} zDepth={1} children={<img src={this.props.img_sm} />} circle={true} />
        <Dialog
          contentStyle={styles.dialogContent}
          bodyStyle={styles.dialogBody}
          style={styles.dialogRoot}
          repositionOnUpdate={false}
          actions={actions}
          modal={false}
          autoDetectWindowHeight={false}
          children={<DialogContent img_lg={this.props.img_lg} lyrics={this.props.lyrics} />}
          open={this.state.open}
          onRequestClose={this.handleClose} />
      </span>
    );
  }
}
