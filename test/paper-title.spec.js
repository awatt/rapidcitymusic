import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';


import PaperTitle from '../src/components/paper-title';

describe('<PaperTitle/>', function () {

  it('props should have the correct values', function () {
    const wrapper = shallow(<PaperTitle title='testTitle'/>);
    const props = wrapper.instance().props;
    expect(props.title).to.equal('testTitle');
  });
 
});