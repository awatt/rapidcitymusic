import React from 'react';
import PaperItem from './paper-item';
import Img1_lg from './images/img1_lg.jpg'
import Img1_sm from './images/img1_sm.jpg'
import Img2_lg from './images/img2_lg.jpg'
import Img2_sm from './images/img2_sm.jpg'
import Img3_lg from './images/img3_lg.jpg'
import Img3_sm from './images/img3_sm.jpg'
import Img4_lg from './images/img4_lg.jpg'
import Img4_sm from './images/img4_sm.jpg'
import Img5_lg from './images/img5_lg.jpg'
import Img5_sm from './images/img5_sm.jpg'
import AllIsreal from './lyrics/allisreal.js'
import Elephantine from './lyrics/elephantine.js'
import Eva from './lyrics/eva.js'
import ICantWait from './lyrics/icantwait.js'
import PopUpCity from './lyrics/popupcity.js'
import SmallHours from './lyrics/smallhours.js'
import WaywardSatellite from './lyrics/waywardsatellite.js'
import WhyShouldIMind from './lyrics/whyshouldimind.js'




const PaperCircle = () => (
  <div>
    <PaperItem img_sm={Img1_sm} img_lg={Img1_lg} lyrics={AllIsreal} playerWidget='' />
    <PaperItem img_sm={Img2_sm} img_lg={Img2_lg} lyrics={Elephantine} playerWidget='' />
    <PaperItem img_sm={Img3_sm} img_lg={Img3_lg} lyrics={Eva} playerWidget='' />
    <PaperItem img_sm={Img4_sm} img_lg={Img4_lg} lyrics={ICantWait} playerWidget='' />
    <PaperItem img_sm={Img5_sm} img_lg={Img5_lg} lyrics={PopUpCity} playerWidget='' />
    <PaperItem img_sm={Img1_sm} img_lg={Img1_lg} lyrics={SmallHours} playerWidget='' />
    <PaperItem img_sm={Img2_sm} img_lg={Img2_lg} lyrics={WaywardSatellite} playerWidget='' />
    <PaperItem img_sm={Img3_sm} img_lg={Img3_lg} lyrics={WhyShouldIMind} playerWidget='' />
  </div>
);


export default PaperCircle;

// import _ from 'lodash';
// import React from 'react';
// import TodosListHeader from './todos-list-header';
// import TodosListItem from './todos-list-item';
// // import './stylesheets/todos-list.scss'

// export default class TodosList extends React.Component {
//     renderItems() {
//         const props = _.omit(this.props, 'todos');

//         return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
//     }

//     render() {
//         return (
//             <table>
//                 <TodosListHeader />
//                 <tbody>
//                     {this.renderItems()}
//                 </tbody>
//             </table>
//         );
//     }
// }


