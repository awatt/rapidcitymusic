import React from 'react';
import { mount, shallow } from 'enzyme';
import chai from 'chai';
const expect = chai.expect;

import Clickity from '../src/components/clickity';

describe('<Clickity/>', function () {

  const wrapper = shallow(<Clickity/>)

  it('should have the assigned classes', function () {
    expect(wrapper.hasClass('clickity')).to.equal(true);
  });

});