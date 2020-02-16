import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

describe('Switch test in Enzyme', () => {
  it('is off by default', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper.find('.text').text()).toContain('Off');
  });

  it('switches from off to on on user click', () => {
    const wrapper = shallow(<Switch />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.text').text()).toContain('On');
  });
});
