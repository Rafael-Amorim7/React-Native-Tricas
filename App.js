import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TextInput, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './pages/Splash/Splash'
import Routes from './components/Routers/Stack'

import { NavigationContainer } from'@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function App (){

return (
      <NavigationContainer>
      <Routes/>
      </NavigationContainer>
      )
      
}