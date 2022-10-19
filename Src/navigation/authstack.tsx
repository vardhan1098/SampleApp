import React,{FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../Screens/Login.Screen';
import RegisterScreen from '../Screens/Register.Screen';
const {Navigator,Screen} = createNativeStackNavigator();
const AuthStack : FC =() =>{
    return(
      
    <Navigator>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="RegisterScreen" component={RegisterScreen}/>
    </Navigator>
 

    )
}

export default AuthStack;