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
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import img9_lg from './images/img9_lg.jpg';


export default class SideMenu extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
      dialogOpen: false,
      isEmailForm: false,
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

  handleAboutDialogOpen() {
    this.setState({dialogOpen: true, dialogContent: <About />});
  }

  handleSoundsDialogOpen() {
    this.setState({dialogOpen: true, dialogContent: <SCPlayer />});
  }

  handleCreditsDialogOpen() {
    this.setState({dialogOpen: true, dialogContent: <Credits />});
  }
  
  handleContactDialogOpen() {
    this.setState({dialogOpen: true, isEmailForm: true, dialogContent: <EmailInput />});
  }    

  handleDialogClose() {
    this.setState({
      dialogOpen: false,
      isEmailForm: false,
    }); 
  }

  render() {

    const styles = {
      menuIconStyles: {
        // fill: '#6286b0',
        // fill: '#0971B2',
        // fill: 'rgba(255, 238, 13, 0.6)',
        fill: 'rgba(232, 175, 12, 0.7)',
        height: 40,
        width: 40,
        verticalAlign: 'middle',
      },
      menuItemStyles: {
        // marginTop: 25,
        // marginBottom: 25,
        paddingTop: 25,
        paddingBottom: 25,
      },
      dialogBodyStyle: {
        backgroundImage: 'URL(' + img9_lg + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        padding: '10px 30px'
      },
      dialogStyle: {
    // width: '80%',
    // height: '80%',
  }
}


    return (
      <div>
          <IconButton
          onTouchTap={this.handleToggle}
          touch={true}
          id='SVG Icon'
          // iconStyle={{fill: '#B20000'}}
          iconStyle={{fill: '#E8AF0C'}}
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
            className='menuClass'
            bodyClassName='menuBodyClass'
            contentClassName={this.state.isEmailForm ? 'menuContentClass emailForm' : 'menuContentClass'}
            modal={false}
            open={this.state.dialogOpen}
            overlayStyle={{opacity: 0}}
            onRequestClose={this.handleDialogClose}
            children={this.state.dialogContent}
            bodyStyle={styles.dialogBodyStyle}
            style={styles.dialogStyle} />

          <MenuItem style={styles.menuItemStyles} onTouchTap={this.handleAboutDialogOpen}><InfoIcon style={styles.menuIconStyles} /></MenuItem>
          <MenuItem style={styles.menuItemStyles} onTouchTap={this.handleSoundsDialogOpen}><MusicNoteIcon style={styles.menuIconStyles} /></MenuItem>
          <MenuItem style={styles.menuItemStyles} linkButton={true} target='_blank' href='https://rapidcity.bandcamp.com/' onTouchTap={this.handleClose}><CartIcon style={styles.menuIconStyles} /></MenuItem>
          <MenuItem style={styles.menuItemStyles} onTouchTap={this.handleContactDialogOpen}><EmailIcon style={styles.menuIconStyles} /></MenuItem>
          <MenuItem style={styles.menuItemStyles} onTouchTap={this.handleCreditsDialogOpen}><PeopleIcon style={styles.menuIconStyles} /></MenuItem>
        </Drawer>
      </div>
    );
  }
}