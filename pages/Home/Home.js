import React from "react";
import { View, FlatList, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import HomePageMenu from '../../components/HomePageMenu/HomePageMenu';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Home (){
	return (
		<View style = {stylesheet._DefaultBackground}>

    <View style={stylesheet.searchBar}><SearchBar/></View>
    <HomePageMenu/>
		</View>
    
	)
}

const stylesheet = StyleSheet.create({
	_DefaultBackground: {
    position: 'relative',
    backgroundColor: 'rgba(239, 239, 239, 1)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderRadius: 14,
    overflow: 'hidden',
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
    left: 0,
    top: 0,
  },
  searchBar: {
     width: Dimensions.get('window').width,
    position: 'absolute',
    alignItems: 'center',
  },  

});