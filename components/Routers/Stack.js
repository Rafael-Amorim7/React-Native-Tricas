import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/Login/Login";
import Home from "../../pages/Home/Home";
import Routes from "./Tab";
import { NavigationContainer } from "@react-navigation/native";

const StackNavigator = createNativeStackNavigator();

export default function Stack() {
  return (
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Login" component={Login} />
      <StackNavigator.Screen name="Home" component={Routes} />
    </StackNavigator.Navigator>
  );
}
