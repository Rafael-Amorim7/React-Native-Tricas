import React from "react";
import Constants from "expo-constants";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from "react-native";

import Logo from "../../components/Logo/Logo";
import Home from "../Home/Home";

export default function App({ navigation }) {
  let marginContent = (Dimensions.get("window").height / 40) * 4;
  return (
    <View style={stylesheet._DefaultBackground}>
      <Logo
        Tcolor="rgba(255, 255, 255, 1)"
        Tricascolor="rgba(0, 178, 255, 1)"
        MarginMain={marginContent}
      />
      <View style={stylesheet._Rectangle_8}></View>
      <View style={[stylesheet._EmailView]}>
        <TextInput
          style={[stylesheet._Input]}
          placeholder="E-mail"
          keyboardType="text"
        />
      </View>
      <View style={[stylesheet._SenhaView]}>
        <TextInput
          style={[stylesheet._Input]}
          placeholder="Senha"
          keyboardType="text"
          secureTextEntry={true}
        />
      </View>
      <View style={[stylesheet._ButtonView]}>
        <TouchableHighlight
          style={[stylesheet._Button]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[stylesheet._ButtonText]}>Acessar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  _DefaultBackground: {
    //position: 'relative',
    backgroundColor: "rgba(239, 239, 239, 1)",
    marginTop: Constants.statusBarHeight,
    width: Dimensions.get("window").width,
    height: "100%",
  },
  _Input: {
    width: (Dimensions.get("window").width / 6) * 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 31,
    padding: 10,
    fontFamily: "Arial",
    textDecorationLine: "none",
    fontSize: 18,
  },
  _EmailView: {
    width: Dimensions.get("window").width,
    position: "absolute",
    alignItems: "center",
    top: (Dimensions.get("window").height / 40) * 15,
  },
  _SenhaView: {
    width: Dimensions.get("window").width,
    position: "absolute",
    alignItems: "center",
    top: (Dimensions.get("window").height / 40) * 18,
  },
  _ButtonView: {
    width: Dimensions.get("window").width,
    position: "absolute",
    alignItems: "center",
    top: (Dimensions.get("window").height / 40) * 21,
  },
  _ButtonText: {
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    fontFamily: "Arial",
    textDecorationLine: "none",
    fontSize: 18,
  },
  _Button: {
    width: (Dimensions.get("window").width / 6) * 5,
    backgroundColor: "rgba(0, 178, 255, 1)",
    borderRadius: 31,
    padding: 10,
  },
});
