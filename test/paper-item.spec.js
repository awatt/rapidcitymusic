import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';


import PaperItem from '../src/components/paper-item';

describe('<PaperItem/>', function () {

  it('should have props for img_sm, img_lg, trackNum, trackName and lyrics', function () {
    const wrapper = shallow(<PaperItem/>);
    expect(wrapper.props().img_sm).to.be.defined;
    expect(wrapper.props().img_lg).to.be.defined;
    expect(wrapper.props().trackNum).to.be.defined;
    expect(wrapper.props().trackName).to.be.defined;
    expect(wrapper.props().lyrics).to.be.defined;
  });
});


