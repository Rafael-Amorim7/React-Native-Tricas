import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TextInput, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login'
import Splash from './pages/Splash/Splash'
import Home from './pages/Home/Home'
import MoreInformation from './pages/MoreInformation/MoreInformation'
import Routes from './components/Routers/Stack'
import { NavigationContainer } from'@react-navigation/native';

const Stack = createNativeStackNavigator()

export default function App (){

/*return (
      /*<NavigationContainer>
      <Routes/>
      </NavigationContainer>
      )*/
	return (
      <Splash />
      )
}