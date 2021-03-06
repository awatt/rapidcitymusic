import React, {Component} from 'react';
import globalEmitter from './global-emitter.js';
import './stylesheets/header.scss'


export default class Header extends Component {
        constructor(props) {
        super(props);
        this.state = {
        	shifted: false,
        };

      this.handleShift = this.handleShift.bind(this);
      }

    	handleShift(){
    		this.setState({shifted: !this.state.shifted});
    	}

    	componentDidMount() {
  		globalEmitter.on('toggleShift', this.handleShift);
    	}

    	componentWillUnmount() {
    		globalEmitter.removeListener('toggleShift')
    	}

      render() {

        return (
     
			<svg className={this.state.shifted ? 'shifted' : 'normal'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810 720" id="cover_svg"><g id="title"><path id="R" d="M247 73.77h-2.4v16.2h-12V44.01c0 0 15.84 0 18.3 0c8.16 0 15.72 4.62 15.72 14.4c0 6.3-2.76 10.56-7.92 12.54 c1.2 1.74 12.3 19.02 12.3 19.02h-14.34C256.66 89.97 248.32 75.87 247 73.77z M244.36 53.19v11.52h3.84c3.3 0 6.18-1.38 6.18-5.76 c0-3.9-2.1-5.76-6.06-5.76H244.36z"/><path id="A" d="M285.28 89.97H272.5l17.04-45.9l13.74-0.06l17.04 45.96h-12.96l-3.12-8.52h-15.9L285.28 89.97z M296.26 58.17l-4.92 14.04 h9.78L296.26 58.17z"/><path id="P" d="M338.86 73.95v16.02h-12V44.01c0 0 13.26 0 20.52 0c8.16 0 14.46 5.58 14.46 15.42c0 9.36-6.3 14.52-14.1 14.52 C344.38 73.95 338.86 73.95 338.86 73.95z M338.62 53.07v12.06h4.2c3.66 0 7.08-1.14 7.08-6.18c0-4.56-3-5.88-6.96-5.88H338.62z"/><path id="D" d="M380.98 89.97h-12V44.01h12V89.97z"/><path id="Ii" d="M391.24 89.97V44.01c0 0 11.94 0 19.2 0c12.36 0 21.84 9.18 21.84 22.44c0 13.44-8.94 23.52-21.72 23.52 C403.36 89.97 391.24 89.97 391.24 89.97z M403.42 54.03v25.62h5.28c7.08 0 11.46-5.64 11.46-13.38c0-7.02-4.68-12.24-11.1-12.24 H403.42z"/><path id="C" d="M455.62 67.41c0-14.7 10.14-24.72 23.64-24.72c4.86 0 7.86 0.6 12.12 2.88c0 0 0 7.08 0 12.48 c-2.76-2.28-5.82-4.02-11.52-4.02c-7.8 0-12.12 5.7-12.12 13.5c0 7.38 5.46 12.3 12.72 12.3c4.44 0 7.74-1.74 10.8-3.78 c0 0 0 9.78 0 12.06c-3.78 1.68-6.78 3.06-11.58 3.06C466.42 91.17 455.62 81.57 455.62 67.41z"/><path id="Iii" d="M511.9 89.97h-12V44.01h12V89.97z"/><path id="T" d="M527.2 90.03V54.99h-9.48V44.07h31.44v10.92h-9.48v35.04H527.2z"/><path id="Y" d="M550.72 44.01h14.88l8.64 14.16l8.52-14.16h14.4l-17.04 25.56v20.4h-11.76V69.81L550.72 44.01z"/></g></svg>
	    
        );
    }
}