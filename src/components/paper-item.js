import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import globalEmitter from './globalEmitter.js';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import DialogContent from './photo-dialog-content.js';
import Header from './header.js';
import './stylesheets/paper-item.scss';
import $ from 'jquery';

export default class PaperItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
          open: false,
          shifted: false,
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
    
    //adjust photo z-index for clickability once it clears the 'fence'
    let scrollTop = event.srcElement.body.scrollTop;
    let elPosition = $(findDOMNode(this)).position().top;

    //toggle title shift when photo scrolls overlaps with it
    if(this.props.trackNum === 1 && scrollTop > 30 && !this.state.shifted){
      this.setState({shifted: !this.state.shifted});
      globalEmitter.emit('toggleShift')
    }

    //toggle shift back to normal lettering
    if(this.props.trackNum === 1 && scrollTop <= 30 && this.state.shifted){
      this.setState({shifted: !this.state.shifted});
      globalEmitter.emit('toggleShift')
    }

    //detect when photo has cleared the fence
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
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden',
      display: 'inline-block',
      zIndex: this.state.zIndex,
    };

    const styles = {
      dialogRoot: {
        display: 'flex',
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
        width: 900,
        textAlign: 'center',
        padding: 'none',
        backgroundImage: 'URL(' + this.props.img_lg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
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
          autoScrollBodyContent={true}
          modal={false}
          autoDetectWindowHeight={true}
          children={<DialogContent lyrics={this.props.lyrics} />}
          // children={<DialogContent img_lg={this.props.img_lg} lyrics={this.props.lyrics} />}
          open={this.state.open}
          onRequestClose={this.handleClose} />
      </span>
    );
  }
}
