jest.mock('react-native-paper', () => {
  const RealModule = jest.requireActual('react-native-paper');
  const MockedModule = {
    ...RealModule,
  };
  return {...jest.requireActual('react-native-paper')};
});
