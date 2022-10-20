import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DataScreen from '../Screens/Data.Screen';
import LoginScreen from '../Screens/Login.Screen';
import RegisterScreen from '../Screens/Register.Screen';

const {Navigator,Screen} = createNativeStackNavigator();
const AuthStack : FC =() =>{
    return(
      
    <Navigator>
      <Screen name="RegisterScreen" component={RegisterScreen}/>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name ="DataScreen" component={DataScreen}/>
      
    </Navigator>
 

    )
}

export default AuthStack;