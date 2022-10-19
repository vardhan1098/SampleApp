import React ,{FC,useEffect,useState}from "react";

import { NavigationContainer } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import 'firebase/compat/database';

import AppStack from "./appstack";
import AuthStack from "./authstack";


const MainNav : FC = () => {
    const[user,setUser] = useState<any>(null);


const bootstrap =() =>{
    
    firebase.auth().onAuthStateChanged(_user => {
        if(_user){
            setUser(_user)
        }
    })
}

useEffect(()=>{
    bootstrap()
}, [])



return(
    <NavigationContainer>
        {user!== null ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
)
}

export default MainNav;
