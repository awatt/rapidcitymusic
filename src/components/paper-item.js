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
    
    console.log("this.props.trackName", this.props.trackName)
    console.log('findDOMNode(this).scrollTop: ', findDOMNode(this).offset)
    

    // if(scrollTop/this.props.trackNum > 324){
    //   this.setState({zIndex: 100})
    // }
    // console.log('this.props.trackNum: ', this.props.trackNum)
    // console.log('this.state.zIndex: ', this.state.zIndex)
  };

  componentDidMount() {
    // console.log('this.refs: ', this.refs)
    // console.log('findDOMNode(this).scrollTop: ', findDOMNode(this).scrollTop)
    // console.log('$(this).position(): ', $(this).position())
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
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
      margin: 30,
      textAlign: 'center',
      overflow: 'hidden',
      display: 'inline-block',
      zIndex: this.state.zIndex,
    };

    console.log('paperStyle.zIndex: ', paperStyle.zIndex)

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
        <Paper className='paperContainer' ref={this.props.trackName} onTouchTap={this.handleOpen} style={paperStyle} zDepth={1} children={<img style={{height: '100%'}} src={this.props.img_sm} />} circle={true} />
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
