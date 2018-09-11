

import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import login from 'CARWASH/components/login';
import mainPage from 'CARWASH/components/mainPage';

const Application = createStackNavigator({
  Home: {screen :login ,navigationOptions:{
    header: null,
  }},
  mainPage:{ screen:mainPage,navigationOptions:{
    header: null,

  }},
},{
    navigationOptions:{
        header:false,

    }

});


export default class App extends Component<Props> {
  render() {
    return (
      <Application />
    );
  }
}
