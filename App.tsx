//import liraries
import React, { Component } from 'react';

import './Src/Constants/firebase';
import MainNav from './Src/navigation/mainNav';

import DataScreen from './Src/Screens/Data.Screen';
import Sample from './Src/Screens/Sample.Screen';

// create a component
const MyComponent = () => {
  return (
   <MainNav/>
  // // <DataScreen/>
  // <Sample/>
  
  );
};


//make this component available to the app
export default MyComponent;
