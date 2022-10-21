

import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../Screens/Home.Screen';
import DashboardScreen from '../Screens/Dashboard.Screen';
import DataScreen from '../Screens/Data.Screen';
import LoginScreen from '../Screens/Login.Screen';
import DetailsDataScreen from '../Screens/DetailsData.Screen';

const{Screen, Navigator} = createNativeStackNavigator();
const AppStack : FC =() =>{
    return(
       
    <Navigator initialRouteName='DataScreen'>
       <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="DashboardScreen" component={DashboardScreen}/>
      <Screen name ="DataScreen" component={DataScreen}/>
      <Screen name ="DetailsDataScreen" component={DetailsDataScreen}/>
    </Navigator>
 

    )
}

export default AppStack;


