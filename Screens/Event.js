import React, { useState } from 'react'
import {View, Text, Image, StyleSheet, StatusBar,ScrollView,TextInput, Alert} from 'react-native'
import { Button, Icon } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Textview = ({text,num,jud,icon,veri})=>{
    return(
      <View style={{backgroundColor:"#eee",width:"100%",padding:10,marginTop:num,borderRadius:5,flexDirection:"row"}}>
        <View style={{flex:0.5,padding:5,alignItems:"center",justifyContent:"center"}}>
         <Icon size={30} type="ionicon" name={icon}/>
        </View>
        <View style={{flex:4.2,padding:5,justifyContent:"center"}}>
         <TextInput style={{fontSize:16,padding:5}} multiline={veri} placeholder={text} secureTextEntry={jud}/>
        </View>
      </View>
    )
  }


export default function Event({navigation}){

    //....Image Picker Codes....///
    const[image,setimage] = useState(null)
    const[done,setdone] = useState(false)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setimage(result.uri);
          setdone(true)
        }
      };

    const Imageview = ()=>{
        if(done){
            return(
              <View style={{width:"100%",borderRadius:10,height:250,marginTop:15,backgroundColor:"#eee",justifyContent:"center"}}>
               <TouchableOpacity onPress={pickImage} style={{width:"100%",height:"100%",borderRadius:10}}>
                <Image source={{uri:image}} style={{width:"100%",height:"100%",borderRadius:10}}/>
               </TouchableOpacity> 
              </View> 
            )
        }
        else{
            return(
                <View style={{width:"100%",borderRadius:10,height:150,marginTop:15,padding:15,backgroundColor:"#eee",justifyContent:"center",alignItems:"center"}}>
                <Icon type="ionicon" name="ios-images" size={50}/>
                <TouchableOpacity onPress={pickImage}>
                 <Text style={{fontWeight:"bold"}}>Drop Flier here</Text>
                </TouchableOpacity>
               </View>
            )
        }
    }  

    return(
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1,justifyContent:"space-between"}} style={style.container}>
        <View style={style.imview}>
          <Image style={{flex:1}} source={require("../assets/splash.png")}/>
        </View>
        <View style={style.logview}>
          <Text style={{fontFamily:"rancho",fontSize:50}}>Event Details</Text>
          <Textview text="Name" num={20} icon="ios-person" jud={false}/>
          <Textview text="Description" veri={true} num={10} icon="ios-clipboard" jud={false}/>
          <Textview text="Date" num={20} icon="ios-calendar" jud={false}/>
          <Textview text="Time" num={20} icon="ios-clock" jud={false}/>
          <Textview text="Venue" num={20} icon="ios-locate" jud={true}/>
          <Imageview/>
          <Textview text="Ticket prices" num={20} veri={true} icon="ios-wallet" jud={false}/>
          <Button title="Done" buttonStyle={{marginTop:10,padding:15,backgroundColor:"#37A7E8"}} containerStyle={{width:"100%"}}/>
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
      alignItems:"center",
      justifyContent:"center",
      padding:10,
      borderTopLeftRadius:80
    }
  })