import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import {Icon} from "react-native-elements"
import { FlatList } from 'react-native-gesture-handler';


const Viewz = ({event,price,date})=>{
    return(
        <View style={{flexDirection:"row",padding:10,backgroundColor:"#eee",borderRadius:6,marginBottom:10}}>
         <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Icon size={65} type="ionicon" name="ios-paper"/>
         </View>
         <View style={{flex:3,justifyContent:"center",padding:10}}>
          <Text style={{fontSize:16}}>{event}</Text>
          <Text style={{fontSize:16}}>{price}</Text>
          <Text style={{fontSize:16}}>Bought on {date}</Text>
         </View>
        </View>
    )
}

const Data = [{id:"1",event:"Boggie King",price:"Ghc 30.00",date:"23/07/20"},
{id:"2",event:"Afrocella",price:"Ghc 130.00",date:"23/12/20"},
{id:"3",event:"VGMA 21",price:"Ghc 80.00",date:"13/09/20"},
{id:"4",event:"Chalewote",price:"Ghc 10.00",date:"03/07/20"},
{id:"5",event:"Famifest",price:"Ghc 30.00",date:"23/03/20"},
{id:"6",event:"Omari",price:"Ghc 10.00",date:"23/03/20"}]

export default function Records(){
    return(
        <View style={styles.container}>
          <FlatList showsVerticalScrollIndicator={false} data={Data} keyExtractor={item=>item.id} renderItem={({item})=> <Viewz event={item.event} price={item.price} date={item.date}/>}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:8,
        backgroundColor:"white"
    }
})