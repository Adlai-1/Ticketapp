import React from 'react'
import {View, Text, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
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
export default function Login({navigation}){
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1,justifyContent:"space-between"}} style={style.container}>
          <View style={style.imview}>
            <Image style={{flex:1}} source={require("../assets/splash.png")}/>
          </View>
          <View style={style.logview}>
            <Text style={{fontFamily:"rancho",fontSize:60}}>Login</Text>
            <Textview text="Email" num={20} icon="mail" jud={false}/>
            <Textview text="Password" num={10} icon="lock" jud={true}/>
            <Button title="Login" onPress={()=>{navigation.navigate('Home')}} buttonStyle={{marginTop:20,padding:15,backgroundColor:"#37A7E8"}} containerStyle={{width:"100%"}}/>
          </View>
          <View style={{padding:10,flexDirection:"row",backgroundColor:"white"}}>
           <View style={style.butview1}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} style={{flex:1,flexDirection:"row"}}>
            <View style={style.iconview}>
              <Icon color="white" size={30} name="business"/>
            </View>
            <View style={{flex:3,justifyContent:"center",padding:10}}>
             <Text style={{fontWeight:"bold",color:"white"}}>Join our Platform</Text>
            </View>
            </TouchableOpacity>
           </View>
           <View style={style.butview}>
            <TouchableOpacity style={{flex:1,flexDirection:"row"}}>
             <View style={style.iconview}>
              <Icon size={30} color="white" name="lock-open"/>
             </View>
              <View style={{flex:3,justifyContent:"center",padding:10}}>
               <Text style={{fontWeight:"bold",color:"white"}}>Change Password</Text>
              </View>
            </TouchableOpacity>
           </View>
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
  },
  iconview:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:10
  },
  butview:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:5,
    borderRadius:5
  },
  butview1:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    marginRight:5,
    borderRadius:5
  }
})