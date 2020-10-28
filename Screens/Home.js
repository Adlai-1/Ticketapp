import React from 'react'
import Records from './Records'
import Stats from './Stats'
import Events from './Event'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Main from './Main';

export default function Homew({navigation,route}){
    navigation.setOptions({headerTitle:getHeaderTitle(route)})
    const Tabs = createMaterialBottomTabNavigator()
    return(
       <Tabs.Navigator shifting={false} barStyle={{backgroundColor:"white"}} activeColor="#37A7E8">
        <Tabs.Screen name="Home" component={Main} options={{tabBarIcon:'home'}}/>
        <Tabs.Screen name="Events" component={Events} options={{tabBarIcon:'alarm'}}/>
        <Tabs.Screen name="Analysis" component={Stats} options={{tabBarIcon:'chart-histogram'}}/>
        <Tabs.Screen name="Records" component={Records} options={{tabBarIcon:'file'}}/>
       </Tabs.Navigator>
    )
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? 'Home';
  
    switch (routeName) {
      case 'Home':
        return'Home'
      
      case 'Events':
        return 'Events';
      
      case 'Analysis':
        return 'Analysis';
          
      case 'Records':
        return 'Records';
    }
}