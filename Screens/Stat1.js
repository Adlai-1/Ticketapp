import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Avatar } from "react-native-elements";


const Viewz = ({icon,text,num,col})=>{
    return(
      <View style={{padding:8,marginTop:10,marginRight:5,marginLeft:5,alignItems:"center",justifyContent:"center",backgroundColor:"#37A7E8",borderRadius:8}}>
        <Avatar rounded={true} icon={{name:icon,size:45,color:col,type:"ionicon"}} size="medium" overlayContainerStyle={{backgroundColor:"#37A7E8"}}/>
        <Text style={{fontWeight:"bold",fontSize:18,marginTop:10,color:"white"}}>{text}</Text>
        <Text style={{fontWeight:"bold",marginTop:10,fontSize:18,color:"white"}}>{num}</Text>
      </View>  
    )
}
const Data = [{id:"1",no:"200"},
{id:"2",no:"200"},
{id:"3",no:"200"},
{id:"4",no:"200"},]

export default function Stat1(){
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} style={styles.container}>
         <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
          <Image style={{flex:1}} source={require("../assets/pic1.jpg")}/>
         </View>
         <View style={{flex:2,padding:5,backgroundColor:"white",flexDirection:"row"}}>
          <View style={{flex:1}}>
            <Viewz icon="ios-eye" col="white" text="Views" num="30k"/>
          </View>
          <View style={{flex:1}}>
           <Viewz icon="ios-star" text="Tickets Sold" col="gold" num="240k"/>
          </View>
         </View>    
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1
    }
})