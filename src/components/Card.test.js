// import React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import Card from './Card';

// console.log(shallow(<Card />));

import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});