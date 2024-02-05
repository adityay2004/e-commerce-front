import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Orderhistory from '../Orderhistory';
import Home from '../Home';


const Innerstack = () => {
    const stack = createStackNavigator();
  return (
    
    <stack.Navigator initialRouteName='Home'>
       <stack.Screen name='Home' component={Home} options={{ headerShown: false }}></stack.Screen>
       <stack.Screen name='Orderhistory' component={Orderhistory} options={{ headerShown: false }}></stack.Screen>
      
   </stack.Navigator> 

  )
}

export default Innerstack