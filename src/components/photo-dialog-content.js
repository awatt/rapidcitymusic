import React, {Component} from 'react';
import './stylesheets/photo-dialog-content.scss';

// export default class PhotoDialogContent extends Component {
//     constructor(props) {
//         super(props);
//   }

//   render() {
//     return (
//       <div className='photoContainer'>        
//           <img className='imgLg' src={this.props.img_lg} />
//           <div className='lyricsContainer'>
//           {this.props.lyrics}
//           </div>
//       </div>
//     );
//   }
// }

export default class PhotoDialogContent extends Component {
    constructor(props) {
        super(props);
  }

  render() {
    return (
      <p>{this.props.lyrics}</p>
    );
  }
}