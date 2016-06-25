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
import './stylesheets/paper-list.scss'

const PaperCircle = () => (
  <div id='trackListContainer'>
    <PaperItem img_sm={Img1_sm} trackNum={1} trackName='AllIsreal' img_lg={Img1_lg} lyrics={<AllIsreal />} />
    <PaperItem img_sm={Img2_sm} trackNum={2} trackName='Elephantine' img_lg={Img2_lg} lyrics={<Elephantine />} />
    <PaperItem img_sm={Img3_sm} trackNum={3} trackName='Eva' img_lg={Img3_lg} lyrics={<Eva />} />
    <PaperItem img_sm={Img4_sm} trackNum={4} trackName='ICantWait' img_lg={Img4_lg} lyrics={<ICantWait />} />
    <PaperItem img_sm={Img5_sm} trackNum={5} trackName='PopUpCity' img_lg={Img5_lg} lyrics={<PopUpCity />} />
    <PaperItem img_sm={Img1_sm} trackNum={6} trackName='SmallHours' img_lg={Img1_lg} lyrics={<SmallHours />} />
    <PaperItem img_sm={Img2_sm} trackNum={7} trackName='WaywardSatellite' img_lg={Img2_lg} lyrics={<WaywardSatellite />} />
    <PaperItem img_sm={Img3_sm} trackNum={8} trackName='WhyShouldIMind' img_lg={Img3_lg} lyrics={<WhyShouldIMind />} />
  </div>
);


export default PaperCircle;


