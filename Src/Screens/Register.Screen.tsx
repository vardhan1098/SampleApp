import React, { FC } from 'react';
import {

  TextInput,
  View,
  StyleSheet,
  Button,
  Alert
} from 'react-native';
import {Card} from 'react-native-paper';

import Input from '../Components/input';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const Register :FC =(Props) => {
  const [name,setName] = React.useState<string|null>(null);
  const [email, setEmail] = React.useState<string|null>(null);
  const [password, setPassword] = React.useState<string|null>(null);

const signup = async () => {
  if(name && email && password){
    try{
      const user = await firebase.auth().createUserWithEmailAndPassword (email,password)
      if(user){
        await firebase.firestore().collection('users').doc(user.user.uid).set({name,email,password})
      }

    }catch(error){
        console.log(error)
    }
   
  }else{
    Alert.alert(`Error`, `Missing the Fields`)
  }
}



  return (
    <View style={styles.board}>
        <Card>
            <Card.Title title="Registration"></Card.Title>
            <Card.Content>
               <Input
                    onChangeText={(text) => setName(text) }
                    placeholder="Enter Full Name"
                />
                <Input
                   onChangeText={(text) => setEmail(text)}
                   placeholder="Enter your Email"
                    />
                <Input
                 onChangeText={(text) => setPassword(text)}
                 secureTextEntry={true}
                 placeholder="Enter your Password"
                  />


                <View style={styles.button}>
                    <Button
                    color='green'
                    title='Sumbit'
                    onPress={signup}/>
                </View> 
        </Card.Content>
     </Card>
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
    }
  });

export default Register;
