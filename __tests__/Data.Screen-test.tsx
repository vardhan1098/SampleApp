import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import MyComponent from '../Src/Screens/Data.Screen';

it('renders correctly', () => {
  let navigation={
    navigate:jest.fn()
  }
  const {getAllByText, getByPlaceholderText} = render(<MyComponent navigation={navigation}/>);
  
});
