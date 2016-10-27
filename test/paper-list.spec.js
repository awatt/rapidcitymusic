import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import PaperItem from '../src/components/paper-item';
import PaperList from '../src/components/paper-list';

describe('<PaperList/>', function () {

  it('should render 13 PaperItem components', () => {
    const wrapper = shallow(<PaperList />);
    expect(wrapper.find(PaperItem)).to.have.length(13);
  });

  // it('should render an `.icon-star`', () => {
  //   const wrapper = shallow(<MyComponent />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('should render children when passed in', () => {
  //   const wrapper = shallow(
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   );
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.equal(true);
  // });
  
});