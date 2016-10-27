import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import PaperItem from '../src/components/paper-item';

import Img2_lg from '../src/components/images/img2_lg.jpg'
import Img2_sm from '../src/components/images/img2_sm.jpg'
import WaywardSatellite from '../src/components/lyrics/waywardsatellite.js'

describe('<PaperItem/>', function () {
  
  const wrapper = shallow(<PaperItem img_sm={Img2_sm} trackNum={1} trackName='Wayward Satellite' img_lg={Img2_lg} lyrics={<WaywardSatellite />} />);

  const props = wrapper.instance().props;

  it('should have defined props for img_sm, img_lg, trackNum, trackName and lyrics', function () {
    expect(props.img_sm).to.be.defined;
    expect(props.img_lg).to.be.defined;
    expect(props.trackNum).to.be.defined;
    expect(props.trackName).to.be.defined;
    expect(props.lyrics).to.be.defined;
  });

  it('props should have the correct values', function () {
    expect(props.img_sm).to.equal(Img2_sm);
    expect(props.img_lg).to.equal(Img2_lg);
    expect(props.trackNum).to.equal(1);
    expect(props.trackName).to.equal('Wayward Satellite');
    expect(props.lyrics).to.deep.equal(<WaywardSatellite />);
  });

    it('should have expected parent and child types', function () {
    
    const paperChild = wrapper.childAt(0);
    const dialogChild = wrapper.childAt(1);

    expect(wrapper.type()).to.equal('span');
    expect(paperChild.type()).to.equal(Paper);
    expect(dialogChild.type()).to.equal(Dialog);
  });


});