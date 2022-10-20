
import React, { useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Alert
} from 'react-native';
import Input from '../Components/input';
import {Card} from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';


const App = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState<string |null>(null);
  const [password, setPassword] =useState<string |null>(null);

  const login = async () => {
    if(email && password){
      const{user} = await firebase.auth().signInWithEmailAndPassword(email,password)
      // console.log("....... getting data",login)
    }else{
      Alert.alert('Missing Fields')
    }
  }

  return (
    <View style={styles.board}>
        <Card>
            <Card.Title title="LOGIN PAGE"></Card.Title>
            <Card.Content>
               <Input
                    onChangeText={(text) =>setEmail(text)}
                    placeholder="Enter Email"
                />
                <Input
                   onChangeText={(text) => setPassword(text)}
                    placeholder="Enter Password"
                    />

                <View style={styles.button}>
                    <Button
                    color='green'
                    title='Login'
                    onPress={login}
                    />
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
      margin:17,  
    },
   
    nor:{
      alignSelf:"center",
      color:"black"
    }
  });

export default App;

