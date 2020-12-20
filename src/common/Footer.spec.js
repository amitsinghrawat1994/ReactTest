import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('should be a footer', () => {
  const wrapper = shallow(<Footer />);
  const span = wrapper.find('div p');
  const result = span.text();

  expect(result).toBe('@ footer');
});
