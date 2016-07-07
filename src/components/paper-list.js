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
import Img6_lg from './images/img6_lg.jpg'
import Img6_sm from './images/img6_sm.jpg'
import Img7_lg from './images/img7_lg.jpg'
import Img7_sm from './images/img7_sm.jpg'
import Img8_lg from './images/img8_lg.jpg'
import Img8_sm from './images/img8_sm.jpg'
import Img9_lg from './images/img9_lg.jpg'
import Img9_sm from './images/img9_sm.jpg'
import Img10_lg from './images/img10_lg.jpg'
import Img10_sm from './images/img10_sm.jpg'
import Img11_lg from './images/img11_lg.jpg'
import Img11_sm from './images/img11_sm.jpg'
import Img12_lg from './images/img12_lg.jpg'
import Img12_sm from './images/img12_sm.jpg'
import Img13_lg from './images/img13_lg.jpg'
import Img13_sm from './images/img13_sm.jpg'

import AllIsreal from './lyrics/allisreal.js'
import Elephantine from './lyrics/elephantine.js'
import Eva from './lyrics/eva.js'
import ICantWait from './lyrics/icantwait.js'
import PopUpCity from './lyrics/popupcity.js'
import SmallHours from './lyrics/smallhours.js'
import WaywardSatellite from './lyrics/waywardsatellite.js'
import WhyShouldIMind from './lyrics/whyshouldimind.js'
import Waiting from './lyrics/waiting.js'
import HeartsTooth from './lyrics/heartstooth.js'
import Rivulets from './lyrics/rivulets.js'
import SoMuchForTheFlowers from './lyrics/somuchfortheflowers.js'
import TakeTheRiver from './lyrics/taketheriver.js'
import './stylesheets/paper-list.scss'

// const PaperList = () => (
//   <div id='trackListContainer'>
//     <PaperItem img_sm={Img2_sm} trackNum={1} trackName='WaywardSatellite' img_lg={Img2_lg} lyrics={<WaywardSatellite />} />
//     <PaperItem img_sm={Img1_sm} trackNum={2} trackName='PopUpCity' img_lg={Img1_lg} lyrics={<PopUpCity />} />
//     <PaperItem img_sm={Img4_sm} trackNum={3} trackName='Waiting' img_lg={Img4_lg} lyrics={<Waiting />} />
//     <PaperItem img_sm={Img12_sm} trackNum={4} trackName='SoMuchForTheFlowers' img_lg={Img12_lg} lyrics={<SoMuchForTheFlowers />} />
//     <PaperItem img_sm={Img9_sm} trackNum={5} trackName='Eva' img_lg={Img9_lg} lyrics={<Eva />} />
//     <PaperItem img_sm={Img5_sm} trackNum={6} trackName='Rivulets' img_lg={Img5_lg} lyrics={<Rivulets />} />
//     <PaperItem img_sm={Img6_sm} trackNum={7} trackName='AllIsreal' img_lg={Img6_lg} lyrics={<AllIsreal />} />
//     <PaperItem img_sm={Img10_sm} trackNum={8} trackName='Elephantine' img_lg={Img10_lg} lyrics={<Elephantine />} />
//     <PaperItem img_sm={Img13_sm} trackNum={9} trackName='ICantWait' img_lg={Img13_lg} lyrics={<ICantWait />} />
//     <PaperItem img_sm={Img8_sm} trackNum={10} trackName='HeartsTooth' img_lg={Img8_lg} lyrics={<HeartsTooth />} />
//     <PaperItem img_sm={Img11_sm} trackNum={11} trackName='WhyShouldIMind' img_lg={Img11_lg} lyrics={<WhyShouldIMind />} />
//     <PaperItem img_sm={Img3_sm} trackNum={12} trackName='SmallHours' img_lg={Img3_lg} lyrics={<SmallHours />} />
//     <PaperItem img_sm={Img7_sm} trackNum={13} trackName='TakeTheRiver' img_lg={Img7_lg} lyrics={<TakeTheRiver />} />
//   </div>
// );

const PaperList = () => (
  <div id='trackListContainer'>
    <PaperItem img_sm={Img2_sm} trackNum={1} trackName='Wayward Satellite' img_lg="./src/components/images/img2_lg.jpg" lyrics={<WaywardSatellite />} />
    <PaperItem img_sm={Img1_sm} trackNum={2} trackName='Pop-Up City' img_lg="./src/components/images/img1_lg.jpg" lyrics={<PopUpCity />} />
    <PaperItem img_sm={Img4_sm} trackNum={3} trackName='Waiting' img_lg="./src/components/images/img4_lg.jpg" lyrics={<Waiting />} />
    <PaperItem img_sm={Img12_sm} trackNum={4} trackName='SMFTF' img_lg="./src/components/images/img12_lg.jpg" lyrics={<SoMuchForTheFlowers />} />
    <PaperItem img_sm={Img9_sm} trackNum={5} trackName='Eva' img_lg="./src/components/images/img9_lg.jpg" lyrics={<Eva />} />
    <PaperItem img_sm={Img5_sm} trackNum={6} trackName='Rivulets' img_lg="./src/components/images/img5_lg.jpg" lyrics={<Rivulets />} />
    <PaperItem img_sm={Img6_sm} trackNum={7} trackName='All is Real' img_lg="./src/components/images/img6_lg.jpg" lyrics={<AllIsreal />} />
    <PaperItem img_sm={Img10_sm} trackNum={8} trackName='Elephantine' img_lg="./src/components/images/img10_lg.jpg" lyrics={<Elephantine />} />
    <PaperItem img_sm={Img13_sm} trackNum={9} trackName='I Can’t Wait' img_lg="./src/components/images/img13_lg.jpg" lyrics={<ICantWait />} />
    <PaperItem img_sm={Img8_sm} trackNum={10} trackName='Heart’s Tooth' img_lg="./src/components/images/img8_lg.jpg" lyrics={<HeartsTooth />} />
    <PaperItem img_sm={Img11_sm} trackNum={11} trackName='Why Should I Mind?' img_lg="./src/components/images/img11_lg.jpg" lyrics={<WhyShouldIMind />} />
    <PaperItem img_sm={Img3_sm} trackNum={12} trackName='Small Hours' img_lg="./src/components/images/img3_lg.jpg" lyrics={<SmallHours />} />
    <PaperItem img_sm={Img7_sm} trackNum={13} trackName='Take The River' img_lg="./src/components/images/img7_lg.jpg" lyrics={<TakeTheRiver />} />
  </div>
);



export default PaperList;


