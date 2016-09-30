import React, {Component} from 'react';
import globalEmitter from './globalEmitter.js';
import ScrollArrow from 'material-ui/svg-icons/navigation/arrow-drop-down';
import InfoIcon from 'material-ui/svg-icons/action/info';
import './stylesheets/scroll-arrow.scss'


export default class scrollDownArrow extends Component {
        constructor(props) {
        super(props);
        this.state = {
        	shifted: false,
        };

      this.handleShift = this.handleShift.bind(this);
      }

    	handleShift(){
            console.log("this.state.shifted: ", this.state.shifted)
    		this.setState({shifted: !this.state.shifted});
    	}

    	componentDidMount() {
  		globalEmitter.on('toggleShift', this.handleShift);
    	}

    	componentWillUnmount() {
    		globalEmitter.removeListener('toggleShift')
    	}

      render() {

    const arrowStyles = {
        // fill: '#6286b0',
        // fill: '#0971B2',
        // fill: 'rgba(255, 238, 13, 0.6)',
        fill: 'rgba(255, 13, 255, 0.4)',
        // fill: 'rgba(232, 175, 12, 0.4)',
        padding: 20,
        height: 40,
        width: 40,
        verticalAlign: 'middle',
      }

        return (            
              <div id="arrow_container">
                  <ScrollArrow className={this.state.shifted ? 'removed' : 'normal'} id='scroll_arrow' style={arrowStyles} />
              </div>
        );
    }
}