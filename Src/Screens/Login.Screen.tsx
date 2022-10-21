
import React, { useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Alert,
  Text
} from 'react-native';
import Input from '../Components/input';

import { firebase } from '@react-native-firebase/auth';


const App = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string |null>(null);
  const [password, setPassword] =useState<string |null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    console.log("first step..")
    if(email && password){
      const{user} = await firebase.auth().signInWithEmailAndPassword(email,password)
      navigation.navigate("DataScreen")
      console.log("....... getting data",login)
    }else{
      setError("MiSSING FIELDS")
      Alert.alert('Missing Fields')
    }
  }

  return (
    <View style={styles.board}>

               <Input
                    testId={'Email'}
                    onChangeText={(text) =>setEmail(text)}
                    placeholder="Enter Email"
                />
                <Input
                testId={'Password'}
                   onChangeText={(text) => setPassword(text)}
                    placeholder="Enter Password"
                    />
                     {error !== null && <Text testID="ErrorMsg">{error}</Text>}

                <View style={styles.button}>
                    <Button
                    testID="SignIn.Button"
                    color='green'
                    title='Login'
                    onPress={login}
                    />
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
      margin:17,  
    },
   
    nor:{
      alignSelf:"center",
      color:"black"
    }
  });

export default App;

