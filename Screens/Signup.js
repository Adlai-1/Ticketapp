import React from 'react'
import {View, Text, Image, StyleSheet, StatusBar,ScrollView,TextInput} from 'react-native'
import { Button, Icon } from "react-native-elements";

const Textview = ({text,num,jud,icon})=>{
    return(
      <View style={{backgroundColor:"#eee",width:"100%",padding:10,marginTop:num,borderRadius:5,flexDirection:"row"}}>
        <View style={{flex:0.5,padding:5,alignItems:"center",justifyContent:"center"}}>
         <Icon size={30} name={icon}/>
        </View>
        <View style={{flex:4.2,padding:5,justifyContent:"center"}}>
         <TextInput style={{fontSize:16,padding:5}} placeholder={text} secureTextEntry={jud}/>
        </View>
      </View>
    )
  }

export default function Signup({navigation}){
    return(
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:2,justifyContent:"space-between"}} style={style.container}>
        <View style={style.imview}>
          <Image style={{flex:1}} source={require("../assets/splash.png")}/>
        </View>
        <View style={style.logview}>
          <Text style={{fontFamily:"rancho",fontSize:60}}>SignUp</Text>
          <Textview text="Name" num={20} icon="person" jud={false}/>
          <Textview text="Address" num={10} icon="home" jud={false}/>
          <Textview text="E-mail" num={20} icon="mail" jud={false}/>
          <Textview text="Telephone" num={20} icon="phone" jud={false}/>
          <Textview text="Password" num={20} icon="lock" jud={true}/>
          <Button title="Login" buttonStyle={{marginTop:20,padding:15,backgroundColor:"#37A7E8"}} containerStyle={{width:"100%"}}/>
        </View>
        <StatusBar backgroundColor="black"/>
      </ScrollView>
    )
}

const style = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#37A7E8"
    },
    imview:{
      alignItems:"center",
      justifyContent:"center",
      padding:10
    },
    logview:{
      flex:1,
      backgroundColor:"white",
      borderTopLeftRadius:80,
      alignItems:"center",
      justifyContent:"center",
      padding:10
    }
  })