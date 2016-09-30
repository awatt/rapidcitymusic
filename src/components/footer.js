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
		            <div>© 2016 · All Rights Reserved · Built by <a href="https://www.linkedin.com/in/awatt2" target="_blank">Andy Watt</a> in <a className="tech" href="https://nodejs.org/" target="_blank">Node.js</a>, <a className="tech" href="https://facebook.github.io/react/" target="_blank">ReactJS</a> and <a className="tech" href="http://www.material-ui.com/" target="_blank">Material-UI</a></div>
	              </div>
	            </footer>
	        </div>
        );
    }
}

