import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Constants from "expo-constants";

export default function MyProfile() {
  return (
    <View style={stylesheet._DefaultBackground}>
      <FlatList
        data={List}
        renderItem={({ item }) => (
          <View style={stylesheet._ItemList}>
            <View style={stylesheet._ListContent}>
              <Icon
                name={item.iconName}
                size={20}
                color="black"
                style={[stylesheet._CategoryIcon]}
              />

              <View style={stylesheet._ItemData}>
                <Text style={stylesheet._Title}>{item.key}</Text>
                <Text style={stylesheet._Comment}>{item.info}</Text>
              </View>
              <Text style={[stylesheet._ChevronIcon]}>
                <Icon name="chevron-right" size={12} color="black" />
              </Text>
            </View>
          </View>
        )}
        contentInset={{ right: 0, top: 0, left: 0, bottom: 0 }}
      />
    </View>
  );
}

const List = [
  { key: "Perfil", info: "Edite seus dados", iconName: "user-circle" },
];

const stylesheet = StyleSheet.create({
  _DefaultBackground: {
    backgroundColor: "rgba(239, 239, 239, 1)",
    width: Dimensions.get("window").width,
    height: "100%",
    marginTop: Constants.statusBarHeight,
  },
  _Title: {
    textDecorationLine: "none",
    fontSize: 16,
  },
  _Comment: {
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(145, 145, 145, 1)",
  },
  _ListContent: {
    flexDirection: "row",
  },
  _ItemList: {
    marginTop: 16,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 5,
  },
  _ItemData: {
    marginLeft: 10,
  },
  _CategoryIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
  _ChevronIcon: {
    flex: 1,
    textAlign: "right",
    marginRight: 10,
  },
});
