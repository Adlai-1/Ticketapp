import React, { useState } from 'react';
import {Text, View } from 'react-native';
import * as Fonts from 'expo-font';
import { AppLoading } from "expo";
import Intro from './Screens/Intro'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Home from './Screens/Home'
import Stat1 from './Screens/Stat1'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const getfonts = ()=>{
  return Fonts.loadAsync({
    'rancho' : require('./assets/Rancho-Regular.ttf'),
    'titan' : require('./assets/TitanOne-Regular.ttf')
  })
}
export default function App() {
  const Stack = createStackNavigator()
  const[fontload,setfont] = useState(false)
  if(fontload){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" options={{headerTransparent:true,title:null}} component={Intro}/>
        <Stack.Screen name="Login" options={{headerLeft:null,headerTransparent:true,title:null}} component={Login}/>
        <Stack.Screen name="Signup" options={{headerLeft:null,headerTransparent:true,title:null}} component={Signup}/>
        <Stack.Screen name="Home" component={Home} options={{headerTransparent:false,headerStyle:{elevation:0},headerLeft:null}}/>
        <Stack.Screen name="Stats" component={Stat1} options={{headerTransparent:false,headerStyle:{elevation:0}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );}
  else{
    return(
      <AppLoading startAsync={getfonts} onFinish={()=>{setfont(true)}}/>
    )
  }
}

