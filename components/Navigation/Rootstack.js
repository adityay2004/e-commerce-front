import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginForm from '../login';
import Signup from '../signup';
import Forgetpassword from '../forgetpassword';
import Bottom from './Bottom';
import Carouselcomponent from '../Splash';
import Otpvarify from '../Otpvarify';
import DrawerNavigation from './DrawerNavigation';


const Rootstack = () => {
    const stack = createStackNavigator();
  return (
    
    <stack.Navigator initialRouteName='Carouselcomponent'>
       <stack.Screen name='Carouselcomponent' component={Carouselcomponent} options={{ headerShown: false }}></stack.Screen>
       <stack.Screen name='Login' component={LoginForm} options={{ headerShown: false }}></stack.Screen>
       <stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}></stack.Screen>
       <stack.Screen name='ForgatePass' component={Forgetpassword} options={{ headerShown: false }}></stack.Screen>
       <stack.Screen name='Otpvarify' component={Otpvarify} options={{ headerShown: false }}></stack.Screen>
       <stack.Screen name='Dashboard' component={DrawerNavigation} options={{ headerShown: false }}></stack.Screen>
      
   </stack.Navigator> 

  )
}

export default Rootstack