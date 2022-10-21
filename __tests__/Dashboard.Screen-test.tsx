import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {firebase} from '@react-native-firebase/auth';
import Firebase from '../_mocks_/firebase';
import Dashboard from '../Src/Screens/Dashboard.Screen';

it('renders correctly', () => {
  let navigation = {
    navigate: jest.fn(),
  };
  const {getAllByText, getByPlaceholderText} = render(<Dashboard />);
  expect(getAllByText('Welcome to Dashboard').length).toBe(1);
});
