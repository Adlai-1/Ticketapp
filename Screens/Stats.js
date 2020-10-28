import React from 'react'
import { View, Text, StyleSheet, Image,} from "react-native";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const Data = [{id:"1",no:"200"},
{id:"2",no:"200"}]

export default function Stats({navigation}){

  const Views = ()=>{
    return(
      <View style={{padding:5}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Stats')}}>
          <Image style={{borderRadius:10}} source={require("../assets/pic1.jpg")}/>
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:18,padding:5,color:"grey"}}>Your past Events</Text>
      <FlatList showsVerticalScrollIndicator={false} data={Data} renderItem={()=><Views/>}/>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:5,
        backgroundColor:"white"
    }
})