import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import Logo from '../../components/Logo/Logo';
import Home from '../Home/Home'

export default function App({navigation}) {
  let marginContent = (Dimensions.get('window').height / 40) * 4;
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
        <TouchableHighlight style={[stylesheet._Button]} onPress={() => navigation.navigate("Home")}>
          <Text style={[stylesheet._ButtonText]}>Acessar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
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
  _Input: {
    width: (Dimensions.get('window').width / 6) * 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 31,
    opacity: 1,
    padding: 10,
    fontFamily: 'Arial',
    fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 18,
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: 0.1,
  },
  _EmailView: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    alignItems: 'center',
    top: (Dimensions.get('window').height / 40) * 15,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
  },
  _SenhaView: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    alignItems: 'center',
    top: (Dimensions.get('window').height / 40) * 18,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
  },
  _ButtonView: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    alignItems: 'center',
    top: (Dimensions.get('window').height / 40) * 21,
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: '0deg' }],
  },
  _ButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: 'Arial',
    fontWeight: 400,
    textDecorationLine: 'none',
    fontSize: 18,
    textAlignVertical: 'top',
    letterSpacing: 0.1,
  },
  _Button: {
    width: (Dimensions.get('window').width / 6) * 5,
    backgroundColor: 'rgba(0, 178, 255, 1)',
    borderRadius: 31,
    opacity: 1,
    padding: 10,
  },
});
