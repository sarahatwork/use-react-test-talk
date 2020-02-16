import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

describe('Switch test in Enzyme', () => {
  it('is off by default', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper.state().isOn).toBe(false);
  });

  it('switches from off to on on user click', () => {
    const wrapper = shallow(<Switch />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().isOn).toBe(true);
  });
});
