import { Text, Dimensions, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class HomePageMenu extends Component {
  render() {
    return (
      <View style={style.content}>

        <View style={style.item}>
          <View style={style.image}>
            <Image source={require('../../assets/img/Saude.png')}/>
          </View>
          <Text style={style.text}>Saúde</Text>
        </View>

        <View style={style.item1}>
          <View style={style.image}>
            <Image source={require('../../assets/img/Educacao.png')} />
          </View>
          <Text style={style.text}>Educação</Text>
        </View>

        <View style={style.item2}>
          <View style={style.image}>
            <Image source={require('../../assets/img/AssistenciaSocial.png')} />
          </View>
          <Text style={style.text}>Assistência</Text><Text>Social</Text>
        </View>

        <View style={style.item3}>
          <View style={style.image}>
            <Image source={require('../../assets/img/Pets.png')} />
          </View>
          <Text style={style.text}>Pets</Text>
        </View>

        <View style={style.item4}>
          <View style={style.image}>
            <Image source={require('../../assets/img/MeioAmbiente.png')} />
          </View>
          <Text style={style.text}>Meio Ambiente</Text>
        </View>

        <View style={style.item5}>
          <View style={style.image}>
            <Image source={require('../../assets/img/Outros.png')} />
          </View> 
          <Text style={style.text}>Outros</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    padding: 10,
    backgroundColor: '#F1F5F4',
    borderRadius: 10,
  },
  text: {
    marginTop:5,
  },
  item: {
    position: 'absolute',
    top: 120,
    left: 60,
    alignItems: 'center',
  },
  item1: {
    position: 'absolute',
    top: 120,
    left: 220,
    alignItems: 'center',
  },
  item2: {
    position: 'absolute',
    top: 280,
    left: 60,
    alignItems: 'center',
  },
  item3: {
    position: 'absolute',
    top: 280,
    left: 220,
    alignItems: 'center',
  },
  item4: {
    position: 'absolute',
    top: 440,
    left: 60,
    alignItems: 'center',
  },
  item5: {
    position: 'absolute',
    top: 440,
    left: 220,
    alignItems: 'center',
  },
});