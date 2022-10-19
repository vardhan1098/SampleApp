//import liraries
import { firebase } from '@react-native-firebase/auth';
import React, { FC } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
const MyComponent : FC = () => {
const signout =() =>{
    firebase.auth().signOut();
}
    return (
        <View style={styles.container}>
            <Text style={{color:'#000'}}>Sasi</Text>\
            <Button
            title='signout'
            onPress={signout}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0',
    },
});

//make this component available to the app
export default MyComponent;
