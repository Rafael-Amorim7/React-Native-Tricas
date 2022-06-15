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

export default function MyProfile() {
  return (
    <View style={stylesheet._DefaultBackground}>
      <FlatList
        data={List}
        renderItem={({ item }) => (
          <View style={stylesheet._ItemList}>
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
    position: "relative",
    backgroundColor: "rgba(239, 239, 239, 1)",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderRadius: 14,
    overflow: "hidden",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    left: 0,
    top: 0,
  },
  _Title: {
    fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
    textAlignVertical: "top",
  },
  _Comment: {
    fontWeight: 400,
    textDecorationLine: "none",
    fontSize: 12,
    color: "rgba(145, 145, 145, 1)",
    textAlignVertical: "top",
  },
  _ItemList: {
    marginTop: 16,
    marginLeft: 0,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: "3",
    flexDirection: "row",
  },
  _ItemData: {
    marginLeft: 10,
  },
  _CategoryIcon: {
    marginRight: 10,
    marginLeft: 5,
  },
  _ChevronIcon: {
    flexDirection: "row",
    flex: 1,
    textAlign: "right",
    marginRight: 10,
  },
});
