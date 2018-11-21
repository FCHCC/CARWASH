

import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,Image,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { isSignedIn } from "./auth.js";
import { createRootNavigator } from "./routes.js";
import firebase from 'react-native-firebase';


export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
   isSignedIn()
     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
     .catch(err => alert("An error occurred"));
 }

  render() {
      const { checkedSignIn, signedIn } = this.state;

      if (!checkedSignIn) {
       return null;
     }

     const Layout = createRootNavigator(signedIn);
     return <Layout />;
  }
}
