import React, {Component} from 'react';
import './stylesheets/footer.scss'
import CoverPhoto from './cover';

export default class Footer extends Component {
    render() {
        return (
			<div>
			  <CoverPhoto />
			    <footer>
	              <div class="container">
		            <div>Copyright © 2016 · All Rights Reserved · RAPID CITY 
		            · Made by <span>Andy Watt</span> with <a href="https://facebook.github.io/react/">ReactJS</a> & <a href="http://www.material-ui.com/">Material-UI</a></div>
	              </div>
	            </footer>
	        </div>
        );
    }
}