

import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import login from './components/login';

const Application = StackNavigator({
  Home: {screen :login },
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
