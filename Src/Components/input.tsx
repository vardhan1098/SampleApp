import React,{FC} from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';


const {height,width} = Dimensions.get('screen');

interface Props{
    placeholder:string;
    onChangeText:(text:string) => void;
    secureTextEntry?:boolean;
    testId?:string;
}

const Input :FC<Props> =(props) =>{
      return(
        <View  style={styles.container}>
            <TextInput
            testID={props.testId}
            style={styles.input}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry ||false}/>
        </View>
      )
}

export default Input;

const styles = StyleSheet.create({
    container:{
         width: width / 1.1,
         alignSelf:'center',
         backgroundColor:"#e3e3e3",
         borderRadius:5,
         marginVertical:10
    },
    input:{
        padding:15
    }
})
  