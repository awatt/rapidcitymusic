import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import About from './about.js'
import SCPlayer from './scPlayer.js'
import EmailInput from './emailInput.js'
import Credits from './credits.js'
import IconButton from 'material-ui/IconButton';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import './stylesheets/sideMenu.scss'
import InfoIcon from 'material-ui/svg-icons/action/info';
import MusicNoteIcon from 'material-ui/svg-icons/image/music-note';
import CartIcon from 'material-ui/svg-icons/action/shopping-cart';
import EmailIcon from 'material-ui/svg-icons/communication/contact-mail';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import IMG10 from './images/img10_lg.jpg';

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
    this.setState({dialogOpen: true, dialogTitle: 'Sounds from the Album', dialogContent: <SCPlayer />});
  }

  handleCreditsDialogOpen() {
    this.setState({dialogOpen: true, dialogTitle: 'Album Credits', dialogContent: <Credits />});
  }
  
  handleContactDialogOpen(event) {
    console.log(event)
    this.setState({dialogOpen: true, dialogTitle: 'Subscribe to the Rapid City Newsletter for updates on new music, videos, events and shows in your area', dialogContent: <EmailInput />});
  }    

  handleDialogClose() {
    this.setState({
      dialogOpen: false
    }); 
  }

  render() {

   const menuIconStyles = {
    fill: '#366396',
    height: 38,
    width: 38,
    verticalAlign: 'middle',
  }

  const menuItemStyles = {
    marginTop: 20,
    marginBottom: 20,
  }

  const dialogBodyStyle = {
    backgroundImage: 'URL("./src/components/images/img9_lg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'auto 100%',
  }

  const dialogStyle = {
    // width: '80%',
    // height: '80%',
  }

    return (
      <div>
          <IconButton
          onTouchTap={this.handleToggle}
          touch={true}
          id='SVG Icon'
          iconStyle={{fill: '#6286b0'}}
          >
          <Menu />
          </IconButton>
          
        <Drawer
          docked={false}
          containerStyle={{backgroundColor: '#212121'}}
          containerClassName='menuContainer'
          width={100}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <Dialog 
            autoScrollBodyContent={true}
            
            modal={false}
            open={this.state.dialogOpen}
            overlayStyle={{opacity: 0}}
            onRequestClose={this.handleDialogClose}
            children={this.state.dialogContent}
            bodyStyle={dialogBodyStyle}
            style={dialogStyle} />

          <MenuItem style={menuItemStyles} onTouchTap={this.handleAboutDialogOpen}><InfoIcon style={menuIconStyles} /></MenuItem>
          <MenuItem style={menuItemStyles} onTouchTap={this.handleSoundsDialogOpen}><MusicNoteIcon style={menuIconStyles} /></MenuItem>
          <MenuItem style={menuItemStyles} linkButton={true} target='_blank' href='https://rapidcity.bandcamp.com/' onTouchTap={this.handleClose}><CartIcon style={menuIconStyles} /></MenuItem>
          <MenuItem style={menuItemStyles} onTouchTap={this.handleContactDialogOpen}><EmailIcon style={menuIconStyles} /></MenuItem>
          <MenuItem style={menuItemStyles} onTouchTap={this.handleCreditsDialogOpen}><PeopleIcon style={menuIconStyles} /></MenuItem>
        </Drawer>
      </div>
    );
  }
}