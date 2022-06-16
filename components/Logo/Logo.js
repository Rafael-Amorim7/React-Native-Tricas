import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font'

export default function Logo(props) {

  return (

              <View style = {[stylesheet._MainView, {marginTop:props.MarginMain,}]}>
                  <Text style = {[stylesheet._T,{color: props.Tcolor}]}>
                      T
                  </Text>

                  <Text style = {[stylesheet._Tricas,{color: props.Tricascolor, marginTop:props.MarginTricas,}]}>
                      Tricas
                  </Text>
              </View>
  );
}

const stylesheet = StyleSheet.create({
  _MainView: {

	},
  _T: {
    fontFamily:'non-serif',
		textDecorationLine: "none",
		fontSize: 137,
    textAlign: "center" 
	},
	_Tricas: {
		textAlignVertical: "top",
    alignItems: "center",
    textAlign: "center"
	},

});