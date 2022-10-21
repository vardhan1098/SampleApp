/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import axios from 'axios';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
jest.mock('axios')
it('renders correctly', () => {
  const {getAllByLabelText, getAllByText} = render(<App />);
});
