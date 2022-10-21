import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';
// import {firebase} from '@react-native-firebase/auth';
import Register from '../Src/Screens/Register.Screen';
//@ts-ignore
let firebase = {
  auth: () => {
    return {
      createUserWithEmailAndPassword: jest.fn(),
    };
  },
};
it('renders correctly', () => {
  let navigation = {
    navigate: jest.fn(),
  };
  const {getAllByText, getByPlaceholderText} = render(
    <Register navigation={navigation} />,
  );
  // const login = getAllByText('Registration');

  expect(getByPlaceholderText('Enter Full Name').children.length).toBe(1);

  expect(getByPlaceholderText('Enter your Email').children.length).toBe(1);
  expect(getByPlaceholderText('Enter your Password').children.length).toBe(1);

  // expect(login.length).toBe(1);
});

it('show error messages', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  const {getByTestId, getByText} = render(<Register navigation={navigation} />);
  fireEvent.press(getByTestId('Register.Button'));
  expect(getByTestId('ErrorMsg').children.length).toBe(1); //throws error
});

it('check submission', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  const {getByTestId, getByText} = render(<Register navigation={navigation} />);
  fireEvent.changeText(getByTestId('Name'), 'abc');
  fireEvent.changeText(getByTestId('Email'), 'abc');
  fireEvent.changeText(getByTestId('Password'), '123');
  fireEvent.press(getByTestId('Register.Button'));
});

it('check navigation to Login Screen', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  const {getByTestId, getByText} = render(<Register navigation={navigation} />);
  fireEvent.press(getByTestId('Nav.Login'));
  expect(navigation.navigate).toBeCalledWith('LoginScreen');
});
