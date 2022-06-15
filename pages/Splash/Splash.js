import * as React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Logo from '../../components/Logo/Logo'

export default function Splash() {
  let margintopTricas = 0;
  let margintopMain = Dimensions.get("window").height/3;
  return (
    <View style = {stylesheet._DefaultBackground}>
      <Logo Tcolor="rgba(255, 255, 255, 1)" Tricascolor="rgba(255, 255, 255, 1)" MarginMain = {margintopMain} MarginTricas = {margintopTricas} />
    </View>
  );
}
const stylesheet = StyleSheet.create({
	_DefaultBackground: {
    backgroundColor: "rgba(0, 178, 255, 1)",
    position: "relative",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		borderRadius: 14,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		left: 0,
		top: 0,
	},
  })