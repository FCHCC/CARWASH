

import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,Image,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { isSignedIn } from "./auth.js";
import { createRootNavigator } from "./routes.js";

{/*const Application = StackNavigator({
  Home: {screen :login ,navigationOptions:{
    header: null,
  }},
  drawerScreen:{ screen: drawerScreen}
},
  {
    headerMode:'float',
    navigationOptions:({navigation})=>({
      headerStyle:{
        backgroundColor: 'rgb(52,58,139)',

      },
      headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'center',
        paddingLeft:50,
      },
      title:'REAL CAR WASH',
      headerTintColor:'white',
      headerLeft:<View style={{paddingLeft:20}}>
        <TouchableHighlight
            onPress={()=>{
              navigation.openDrawer();
            }}>
              <Image source={require("./images/menuicon.png")}/>
            </TouchableHighlight>
      </View>
    })
  }
);*/}

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
