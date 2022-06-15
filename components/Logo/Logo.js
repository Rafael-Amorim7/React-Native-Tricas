import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

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
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
  _T: {
		fontFamily: "Noto Serif",
		fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 137,
		color: "rgba(255, 255, 255, 1)",
		textAlignVertical: "top",
		letterSpacing: 0.1,
    alignItems: "center",
    textAlign: "center"
	},
	_Tricas: {
		textAlignVertical: "top",
    alignItems: "center",
    textAlign: "center"
	},

});


	/*_loading: {
    position: "absolute",
		width: 33,
		height: 33,
		borderRadius: 0,
		opacity: 1,
		left: 172,
		right: "auto",
		top: 411,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},*/