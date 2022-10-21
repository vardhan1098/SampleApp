jest.mock('@react-native-firebase/app', () => ({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  auth: () => {
    return {
      signOut: jest.fn(),
      onAuthStateChanged: jest.fn(() => {
        return Promise.resolve('user');
      }),
    };
  },
}));

jest.mock('@react-native-firebase/auth', () => ({
  GoogleAuthProvider: {
    credential: jest.fn().mockReturnValue('123'),
  },
  signOut: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

export default {
  auth() {
    console.log('auth real implementation');
    return this;
  },
  async signOut() {
    console.log('signOut real implementation');
  },
};
