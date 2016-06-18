import React, {Component} from 'react';
import './stylesheets/cover.scss'
import coverImg from './images/coverPhoto_edit_base_gradients.png'

export default class CoverPhoto extends Component {
    render() {
        return (
	      <div id='coverImg' >
	      	<img src={coverImg} />
	      </div>
        );
    }
}