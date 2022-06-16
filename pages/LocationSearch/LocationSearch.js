import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import SearchBar from '../../components/SearchBar/SearchBar';
import Constants from 'expo-constants'


export default function LocationSearch (){
	return (
		<View style = {stylesheet._DefaultBackground}>
    <View style={stylesheet.searchBar}><SearchBar/></View>
		</View>
    
	)
}

const stylesheet = StyleSheet.create({
	_DefaultBackground: {
    position: 'relative',
    backgroundColor: 'rgba(239, 239, 239, 1)',
    width: Dimensions.get('window').width,
    borderRadius: 14,
    height: '100%' ,
    marginTop: Constants.statusBarHeight 
  },
 searchBar: {
     width: Dimensions.get('window').width,
    position: 'absolute',
    alignItems: 'center',
  },  
});