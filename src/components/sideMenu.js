import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import About from './about.js'
import TrackList from './trackList.js'
import EmailInput from './emailInput.js'
import Credits from './credits.js'
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import './stylesheets/sideMenu.scss'
// import RaisedButton from 'material-ui/RaisedButton';

export default class SideMenu extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
      dialogOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAboutDialogOpen = this.handleAboutDialogOpen.bind(this);
    this.handleSoundsDialogOpen = this.handleSoundsDialogOpen.bind(this);
    this.handleCreditsDialogOpen = this.handleCreditsDialogOpen.bind(this);
    this.handleContactDialogOpen = this.handleContactDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleAboutDialogOpen(event) {
    console.log(event)
    this.setState({dialogOpen: true, dialogTitle: 'About', dialogContent: <About />});
  }

  handleSoundsDialogOpen() {
    this.setState({dialogOpen: true, dialogTitle: 'Sounds', dialogContent: <TrackList />});
  }

  handleCreditsDialogOpen() {
    this.setState({dialogOpen: true, dialogTitle: 'Credits', dialogContent: <Credits />});
  }
  
  handleContactDialogOpen(event) {
    console.log(event)
    this.setState({dialogOpen: true, dialogTitle: 'Contact', dialogContent: <EmailInput />});
  }    

  handleDialogClose() {
    this.setState({
      dialogOpen: false
    });
  }

  render() {

    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose} />
    );

    return (
      <div>
          <FloatingActionButton 
              onTouchTap={this.handleToggle}
              id='menuButton'
              backgroundColor={'#FF5722'}
              mini={true}
              zDepth={3}
          >
            <Menu />
          </FloatingActionButton>
          
        <Drawer
          docked={false}
          width={100}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <Dialog 
            title={this.state.dialogTitle}
            modal={false}
            open={this.state.dialogOpen}
            overlayStyle={{opacity: 0}}
            onRequestClose={this.handleDialogClose}
            children={this.state.dialogContent} />

          <MenuItem prop1='here I am about' onTouchTap={this.handleAboutDialogOpen}>ABOUT</MenuItem>
          <MenuItem onTouchTap={this.handleSoundsDialogOpen}>SOUNDS</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>SHOP</MenuItem>
          <MenuItem prop2='here I am contact' onTouchTap={this.handleContactDialogOpen}>CONTACT</MenuItem>
          <MenuItem onTouchTap={this.handleCreditsDialogOpen}>CREDITS</MenuItem>
        </Drawer>
      </div>
    );
  }
}