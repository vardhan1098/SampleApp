import React, { FC } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  Text
} from 'react-native';

import Input from '../Components/input';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register  =({navigation}: {navigation: any}) => {
  const [name,setName] = React.useState<string|null>(null);
  const [email, setEmail] = React.useState<string|null>(null);
  const [password, setPassword] = React.useState<string|null>(null);
  const [error, setError] = React.useState<string | null>(null);

const signup = async () => {
console.log("==== first step")
  if(name && email && password){
    console.log("=== second step")
    try{
      console.log("=== third step")
      const user = await firebase.auth().createUserWithEmailAndPassword (email,password)
      navigation.navigate('LoginScreen')
      console.log("==== nsmd",user)
      if(user){
        await AsyncStorage.setItem("user_data", JSON.stringify(user));
        
        navigation.navigate('LoginScreen')
        console.log("=== getting up",signup);
      }

    }catch(error){
        console.log(error)
    }
   
  }else{
    setError("Missing Fields")
    Alert.alert(`Error`, `Missing the Fields`)
  }
}



  return (
    <View style={styles.board}>
           
               <Input
                    testId ="Name"
                    onChangeText={(text) => setName(text) }
                    placeholder="Enter Full Name"
                />
                <Input
                    testId='Email'
                   onChangeText={(text) => setEmail(text)}
                   placeholder="Enter your Email"
                    />
                <Input
                testId='Password'
                 onChangeText={(text) => setPassword(text)}
                 secureTextEntry={true}
                 placeholder="Enter your Password"
                  />

            {error !== null && <Text testID="ErrorMsg">{error}</Text>}
                <View style={styles.button}>
                    <Button
                    testID="Register.Button"
                    color='green'
                    title='Signup'
                    onPress={signup}/>
                </View> 
                <View style={styles.chan}>
                  <Text style={styles.com}>Already have an account ?</Text>
                  <Text style={styles.num}
                  testID="Nav.Login"
                   onPress={() => navigation.navigate('LoginScreen')}> Signin</Text>
                </View>
    
    </View>
  )
  }
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    board:{
      flex:1,
    backgroundColor:"#5f9ea0",
      alignContent:"center",
      justifyContent:"center",
    },
    button:{
      margin:12,
      
    },
    Regbutton:{
      margin:17,
      color:"red"
    },
    nor:{
      alignSelf:"center",
      color:"black"
    },
    com:{
      textAlign:"center",
    },
    chan:{
      alignSelf:"center",
      flexDirection:"row"
    },
    num:{
      color:"darkblue"
    }
  
  });

export default Register;
