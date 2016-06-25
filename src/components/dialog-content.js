import React, {Component} from 'react';
import './stylesheets/dialog-content.scss';

export default class DialogContent extends Component {
    constructor(props) {
        super(props);
  }



  render() {

    return (
      <div className='trackContainer'>
        
          <img className='trackImgLg' src={this.props.img_lg} />
          <div className='lyricsBox'>
          {this.props.lyrics}
          </div>
          <div className='playerBox'>
          {this.props.playerWidget}
          </div>
        
        
      </div>
    );
  }
}
