
//import liraries
import { firebase } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component,FC } from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';


// create a component
const MyComponent = ({navigation}: {navigation: any}) => {
   
    const signOut =() =>{
        firebase.auth().signOut();
    }

 

    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
            <View>
                <Button
                title='Signout'
                onPress={signOut}/>
            </View>

            <Button
            title='Data'
            onPress={() => navigation.navigate('DataScreen')}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c0',
    },
});

//make this component available to the app
export default MyComponent;
