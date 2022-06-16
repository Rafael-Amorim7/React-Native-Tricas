import * as React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Logo from "../../components/Logo/Logo";
import Constants from "expo-constants";

export default function Splash({ navigation }) {
  setTimeout(() => {
    navigation.navigate("Login");
  }, 2000);

  let margintopTricas = 0;
  let margintopMain = Dimensions.get("window").height / 3;
  return (
    <View style={stylesheet._DefaultBackground}>
      <Logo
        Tcolor="rgba(255, 255, 255, 1)"
        Tricascolor="rgba(255, 255, 255, 1)"
        MarginMain={margintopMain}
        MarginTricas={margintopTricas}
      />
    </View>
  );
}
const stylesheet = StyleSheet.create({
  _DefaultBackground: {
    backgroundColor: "rgba(0, 178, 255, 1)",
    position: "relative",
    width: Dimensions.get("window").width,
    borderRadius: 14,
    height: "100%",
    marginTop: Constants.statusBarHeight,
  },
});
