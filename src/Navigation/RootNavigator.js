import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Onboarding/Welcome';
import Login from '../screens/Onboarding/Login';
import Signup from '../screens/Onboarding/Signup';
import RecoverPassword from '../screens/Onboarding/RecoverPassword';
import HomeScreen from '../screens/HomeScreen';
import Categories from '../screens/Dashboard/Categories';
import Explore from '../screens/Dashboard/Explore';

import ProductDetails from '../screens/Dashboard/ProductDetails';
import CustomDrawer from '../screens/Home/CustomDrawer';
import MainRotutes from './MainRotutes';
import Checkout1 from '../screens/Dashboard/Checkout1';
import Checkout2 from '../screens/Dashboard/Checkout2';
import Checkout3 from '../screens/Dashboard/Checkout3';
import Checkout4 from '../screens/Dashboard/Checkout4';
import Checkout5 from '../screens/Dashboard/Checkout5';
import Checkout6 from '../screens/Dashboard/Checkout6';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
      <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name='RecoverPassword' component={RecoverPassword} options={{headerShown: false}}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Categories' component={Categories} options={{headerShown: false}}/>
      
      <Stack.Screen name='Explore' component={Explore} options={{headerShown: false}}/>
      <Stack.Screen name='Checkout1' component={Checkout1} options={{headerShown: false}}/>
      <Stack.Screen name='Checkout2' component={Checkout2} options={{headerShown: false}}/>
      <Stack.Screen name='Checkout3' component={Checkout3} options={{headerShown: false}}/>
      <Stack.Screen name='Checkout4' component={Checkout4} options={{headerShown: false}}/>
      <Stack.Screen name='Checkout5' component={Checkout5} options={{headerShown: false}}/>
      <Stack.Screen name='Checkout6' component={Checkout6} options={{headerShown: false}}/>
     
      <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown: 
        false}}/>
        <Stack.Screen name='CustomDrawer' component={CustomDrawer} options={{headerShown: 
        false}}/>
         <Stack.Screen name='MainRotutes' component={MainRotutes} options={{headerShown: 
        false}}/>
        
      

      
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default RootNavigator;