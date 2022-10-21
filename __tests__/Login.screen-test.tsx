import 'react-native';
import React from 'react';
import App from '../Src/Screens/Login.Screen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {firebase} from '@react-native-firebase/auth';
import Firebase from '../_mocks_/firebase';
//@ts-ignore
// firebase.auth = jest.fn();
it('renders correctly', () => {
  let navigation = {
    navigate: jest.fn(),
  };
  const {getAllByText, getByPlaceholderText} = render(
    <App navigation={navigation} />,
  );
  const login = getAllByText('Login');

  expect(getByPlaceholderText('Enter Email').children.length).toBe(1);

  expect(getByPlaceholderText('Enter Password').children.length).toBe(1);

  expect(login.length).toBe(1);
});

it('show error messages', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  const {getByTestId, getByText} = render(<App navigation={navigation} />);
  fireEvent.press(getByTestId('SignIn.Button'));
  expect(getByTestId('ErrorMsg').children.length).toBe(1); //throws error
});
it('succesful submission', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  const {getByTestId, getByText} = render(<App navigation={navigation} />);
  fireEvent.changeText(getByTestId('Email'), 'abc');
  fireEvent.changeText(getByTestId('Password'), '123');
  fireEvent.press(getByTestId('SignIn.Button'));
  // expect(firebase.auth.signInWithEmailAndPassword).toBeCalledWith('abc', '123');
});
