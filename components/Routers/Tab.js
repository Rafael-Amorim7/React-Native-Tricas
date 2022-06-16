import * as React from 'react';
import { createBottomTabNavigator } from'@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { View, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font'
import Home from '../../pages/Home/Home'
import LocationSearch from '../../pages/LocationSearch/LocationSearch'
import MoreInformation from '../../pages/MoreInformation/MoreInformation'



const TabNavigator = createBottomTabNavigator();

export default function Tab(props) {
  
  return (
      <TabNavigator.Navigator initialRouteName = "Home" >
          <TabNavigator.Screen 
            name='Home' 
            component={Home}
            options = {{
              title: 'Home',
              headerTitle:'T',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor:'rgba(0, 178, 255, 1)',
                },
              headerTitleStyle: {
                fontFamily: "non-serif",
		            textDecorationLine: "none",
		            fontSize: 35,
		            color: "rgba(255, 255, 255, 1)",
              },
              tabBarIcon: ()=> (
                <Icon name='home' size={20} color="rgba(0, 178, 255, 1)"/>
              )
            }
            }
          />
          <TabNavigator.Screen name='Map' component={LocationSearch}
          options = {{
              title: 'Mapa de Doações',
              headerTitle:'Mapa de Doações',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor:'rgba(0, 178, 255, 1)',
                },
              headerTitleStyle: {
                fontFamily: "Arial",
		            color: "rgba(255, 255, 255, 1)",
              },
              tabBarIcon: ()=> (
                <View style={stylesheet._CenterButton}>
                  <Icon name='map-marker-alt' size={45} color="rgba(0, 178, 255, 1)"/>
                </View>
              )
            }}/>
          <TabNavigator.Screen name='Mais' component={MoreInformation}
            options = {{
              title: 'Mais',
              headerTitle:'Mais informações',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor:'rgba(0, 178, 255, 1)',
                },
              headerTitleStyle: {
	        	    fontFamily: "uni-north",
		            color: "rgba(255, 255, 255, 1)",
              },
              tabBarIcon: ()=> (
                <Icon name='bars' size={20} color="rgba(0, 178, 255, 1)"/>
              )
              }}/>
        </TabNavigator.Navigator>        
  );
}
const stylesheet = StyleSheet.create({
_CenterButton: {
  backgroundColor: 'white' ,
  padding: 5 ,
  width: 60 ,
  height: 60 ,
  borderRadius: 100 ,
  alignItems: 'center' ,
  justifyContent: 'center' ,
  marginBottom: 20 ,
}
});
