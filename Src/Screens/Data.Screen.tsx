import React, { FC, useEffect, useState } from "react"
import { Alert, FlatList, KeyboardAvoidingView, Button,Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeScreen = ({navigation}: {navigation: any}) => {
  const [propsdata, setprops] = useState()
  const [ListData, SetListData] = useState([])
  useEffect(() => {
    AsyncData()
    // renderdata()
    console.log("for ned")
    LoadData()
  }, [])

  const AsyncData = async () => {
    let data = await AsyncStorage.getItem("user_data");
    //   console.log("data",data)
  }

  const LoadData = async () => {
    console.log("...first step")
    var config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    };

    try{
    let response=await fetch(config.url)
    let data=await response.json()
    SetListData(data)
    }catch(err){
      console.log("err in fetch ",err)
    }
     

  }



  const renderdata = (data: object) => {
    console.log("====hosakda",data.item)
    return (
    //   <Card
    //     numberOfLines={true}
    //     propsdata={data.item}
    //     onpress={() => { props.navigation.navigate("PostDatilScreen", { data: data.item }) }}
    //   ></Card>
    <View style={{flex:1,flexDirection:'row', marginRight: 19, marginLeft: 15, marginTop: 10, backgroundColor:'#DFE4EE',padding: 15,borderRadius: 7,}}>
        <Text>{data.item.id} .</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('DetailsDataScreen')}>
        <Text style={styles.theader}>{data.item.title}</Text>
        </TouchableOpacity>
    </View>
    )
  }

  const FoterStyle = () => {
    return <View style={{ height: 50, width: "100%" }}></View>
  }
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.container}>
       
        <FlatList
          data={ListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderdata}
          ListFooterComponent={FoterStyle}
        ></FlatList>
     
      </View>
    </SafeAreaView>
  )
}
export default HomeScreen;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  theader:{
    paddingLeft:5,
    color:"darkblue"
  }
})

