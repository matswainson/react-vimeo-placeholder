import * as React from 'react';
import Vimeo from '../src';
import { create, ReactTestRenderer } from 'react-test-renderer';

let vimeo: ReactTestRenderer;

it('renders correctly', () => {
  vimeo = create(<Vimeo id="87008050" />);
  vimeo.toJSON();
  expect(vimeo).toMatchSnapshot();
});