import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class mainPage extends React.Component {

  static navigationOptions ={
    drawerLabel:'Home',
    drawerIcon:({tintColor}) =>(
      <Image source={require('CARWASH/images/menuicon.png')
              style={[styles.icon, {tintColor: tintColor}]}}/>
    )
  }

  render() {
    return (
      <View >


      <Text>HOLA</Text>
              </View>

    );
  }

}

const styles = StyleSheet.create({
  icon:{
    width:24,
    height:24,
  },
})
