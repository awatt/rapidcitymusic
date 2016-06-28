import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DialogContent from './dialog-content.js';
import './stylesheets/paper-item.scss';
import $ from 'jquery';

export default class PaperItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
          open: false,
          zIndex: 0,
      };
      
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  handleScroll() {
    
    //adjust trackcard z-index for clickability once it clears the 'fence'
    let scrollTop = event.srcElement.body.scrollTop;
    let elPosition = $(findDOMNode(this)).position().top;
  
    if(scrollTop - elPosition > -440){
      this.setState({zIndex: 101});
    } else if (this.state.zIndex === 101){
      this.setState({zIndex: 0});
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

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
      margin: 40,
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden',
      display: 'inline-block',
      zIndex: this.state.zIndex,
    };

    const styles = {
      dialogRoot: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
      },
      dialogContent: {
        position: 'relative',
        width: '80%',
        maxWidth: 'none',
      },
      dialogBody: {
        padding: 'none',
      }
    };

    return (
      <span>
        <Paper className='paperContainer' tooltip='test' ref={this.props.trackName} onTouchTap={this.handleOpen} style={paperStyle} zDepth={1} children={<img style={{height: '100%'}} src={this.props.img_sm} />} circle={true} />
        <Dialog
          contentStyle={styles.dialogContent}
          bodyStyle={styles.dialogBody}
          style={styles.dialogRoot}
          repositionOnUpdate={false}
          
          modal={false}
          autoDetectWindowHeight={false}
          children={<DialogContent img_lg={this.props.img_lg} lyrics={this.props.lyrics} />}
          open={this.state.open}
          onRequestClose={this.handleClose} />
      </span>
    );
  }
}
