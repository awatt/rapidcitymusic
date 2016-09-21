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
		            <div>© 2016 · All Rights Reserved · Built by <a href="https://www.linkedin.com/in/awatt2">Andy Watt</a> using <a className="tech" href="https://nodejs.org/">Node.js</a>, <a className="tech" href="https://facebook.github.io/react/">ReactJS</a> and <a className="tech" href="http://www.material-ui.com/">Material-UI</a></div>
	              </div>
	            </footer>
	        </div>
        );
    }
}

