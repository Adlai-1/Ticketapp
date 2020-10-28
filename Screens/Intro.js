import React from 'react'
import { Image, StyleSheet, View,Text } from 'react-native';
import Introslider from "react-native-app-intro-slider";
import { Icon } from "react-native-elements";

const data = [
    {id:"1",title:'Advertise',word:"From Music concerts to stage plays you bring the details and we get the crowds for you.",image:require('../assets/intro2.png')},
    {id:"2",title:"Buy",word:"Buy Tickets to your favourite events easily, faster and securely.",image:require('../assets/intro1.png')},
    {id:"3",title:"Sell",word:"Sell tickets to your events with our platform and take advantage of an easy and safe marketing platform.",image:require('../assets/intro3.png')},
]

const introview = ({item})=>{
    return(
     <View style={style.container}>
        <Image style={{width:"100%",height:"50%"}} source={item.image}/>
        <Text style={{fontSize:36,padding:5,fontFamily:"titan"}}>{item.title}</Text>
        <Text style={{textAlign:"center",fontSize:16}}>{item.word}</Text>
      </View>  
    )
}

const Next = ()=>{
    return(
        <View style={style.buttonCircle}>
         <Icon color="white" size={30} name="arrow-forward"/>
        </View>
    )
}

const Done = ()=>{
    return(
        <View style={style.buttonCircle}>
         <Icon color="white" size={30} name="done"/>
        </View>
    )
}


export default function Intro({navigation}){
    const Done_function = ()=>{
        navigation.navigate('Login')
    }
    return(
        <Introslider onDone={()=>{Done_function()}} renderDoneButton={Done} renderNextButton={Next} activeDotStyle={{backgroundColor:"#37A7E8"}} dotStyle={{backgroundColor:"grey"}} data={data} renderItem={introview}/>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: '#37A7E8',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
})