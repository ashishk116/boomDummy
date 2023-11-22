
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Lost from '../screens/Lost';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {user} = useSelector((state)=>state);

  return <>
    {user.userName != '' ? <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Lost" screenOptions={{ headerShown: true }}  component={Lost} />
  </Stack.Navigator> : <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>}
  </>
  
}

export default AppStack