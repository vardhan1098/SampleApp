//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

interface IPost {
    id: number;
    userId?: number;
    title: string;
    body: string;
  }
  const defaultPosts:IPost[] = [];

// create a component
const MyComponent = () => {
    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
    // TODO - get posts
    console.log("first tghi")
    axios
    .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
        console.log("==== newdta",response)
        setPosts(response.data);
        setLoading(false);
    })
    .catch(
     
        ex => {
          console.log("getudbjksld..")
            const error =
            
            ex.response.status === 404
              ? "Resource Not found"
              : "An unexpected error has occurred";
            setError(error);
            setLoading(false);
        })
  }, []);
    return (
       
        <View>
   <Text>sasi</Text>
        </View>
    );
};


//make this component available to the app
export default MyComponent;
