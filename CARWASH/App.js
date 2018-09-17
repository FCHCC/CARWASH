

import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,Image,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import login from 'CARWASH/components/login';
import drawerScreen from 'CARWASH/components/drawerScreen';

const Application = StackNavigator({
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
              if(navigation.state.index==0){
                navigation.openDrawer()}else{
                  navigation.closeDrawer();
                }
            }}>
              <Image source={require("./images/menuicon.png")}/>
            </TouchableHighlight>
      </View>
    })
  }
);

export default class App extends Component<Props> {
  render() {
    return (
      <Application />
    );
  }
}
