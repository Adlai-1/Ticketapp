import React from 'react'
import { View, Text, StyleSheet,ScrollView, Image, ImageBackground, Alert  } from "react-native";
import { Button } from "react-native-elements";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {  } from "react-native-Li";


const Description = ()=>{
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} style={styles.container}>
         <View style={{flex:2,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
          <Image style={{flex:1}} source={require("../assets/pic1.jpg")}/>
         </View>
         <View style={{flex:1,padding:5,backgroundColor:"white"}}>
          <Text style={{fontSize:20,fontWeight:"bold",marginBottom:5}}>About</Text> 
          <Text>Lorem ipsum dolor sit amet, unum alterum tincidunt vel an, oportere dissentiet eam ut. Unum putent legimus vim ex, in odio omnium verear per, te duo sapientem salutatus reprehendunt. Omittam fabellas dissentias ei nam, voluptua officiis conceptam no duo. Alterum detraxit hendrerit vix ex.</Text>
          <Text style={{marginTop:10,fontSize:16,fontWeight:"bold"}}>Date: 27th October 2020</Text>
          <Text style={{fontWeight:"bold",fontSize:16}}>Rate: Ghc 30.00</Text> 
          <Text style={{fontWeight:"bold",fontSize:16}}>Venue: Perez Chapel,Dzorwulu</Text>
          <Button title="Buy Ticket" containerStyle={{marginTop:20}} buttonStyle={{padding:15}}/>
         </View>    
        </ScrollView>
    )
}

const text = "Lorem ipsum dolor sit amet, elitr utinam constituto est an, duo an clita accusam mandamus. Cu pri solum melius expetendis. Quod libris conclusionemque ea mea. No pro choro causae. Cum mediocrem petentium ei, delicata scriptorem mei ut, ius te petentium pertinacia."
const Lit = ({number,name})=>{
    return(
      <TouchableOpacity style={{flex:1,marginBottom:10,width:340,marginRight:10,height:350}}>
       <ImageBackground imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('../assets/acc.jpg')}  style={{flex:4}}/>
       <View style={{flex:1,backgroundColor:"#eee",padding:8}}>
        <Text style={{fontWeight:"bold",fontSize:20}}>Accra Boogie King</Text>
        <Text>{text.slice(0,100)}...</Text>
       </View>
      </TouchableOpacity>
    )
}

const Lit1 = ({number,name})=>{
    return(
    <TouchableOpacity style={{flex:1,marginBottom:10,width:"100%",height:350}}>
     <ImageBackground imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('../assets/pic1.jpg')} style={{flex:4}}/>
     <View style={{flex:1,backgroundColor:"#eee",padding:8}}>
      <Text style={{fontWeight:"bold",fontSize:20}}>Adom Praise</Text>
      <Text>{text.slice(0,100)}...</Text>
     </View>
    </TouchableOpacity>
    )
  }
  
const Data = [{id:"1",event:"Sunday Service"},
{id:"2",event:"Sunday Service"},
{id:"3",event:"Sunday Service"},
{id:"4",event:"Sunday Service"}]

export default function Main(){
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}}>
         <View style={{flex:0.4,padding:8,backgroundColor:"white"}}>
          <Text style={{fontWeight:"bold",fontSize:18,marginBottom:10}}>Top Rated Events</Text>
          <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={Data} keyExtractor={item=>item.id} renderItem={({item})=> <Lit/>}/>
         </View>
         <View style={{flex:4,backgroundColor:"white",padding:8}}>
          <Text style={{fontWeight:"bold",fontSize:18,marginBottom:10}}>Upcoming Events</Text>
          <FlatList showsHorizontalScrollIndicator={false} data={Data} keyExtractor={item=>item.id} renderItem={({item})=> <Lit1/>}/>
         </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})