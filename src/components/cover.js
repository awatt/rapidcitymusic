import React, {Component} from 'react';
import coverImg from './images/cover-photo_edit_base_gradients.png'

export default class CoverPhoto extends Component {
    render() {
        return (
	      <div id='coverImg' >
	      	<img src={coverImg} />
	      </div>
        );
    }
}