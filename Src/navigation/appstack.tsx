

import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../Screens/Home.Screen';
import DashboardScreen from '../Screens/Dashboard.Screen';

const{Screen, Navigator} = createNativeStackNavigator();
const AppStack : FC =() =>{
    return(
       
    <Navigator>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="DashboardScreen" component={DashboardScreen}/>
    </Navigator>
 

    )
}

export default AppStack;


