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
		            <div>Copyright © 2016 · All Rights Reserved · RAPID CITY</div>
		            <div>Made by Andrew Watt using <a href="http://www.material-ui.com/">Material-UI</a></div>
	              </div>
	            </footer>
	        </div>
        );
    }
}