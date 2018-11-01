import {  createStackNavigator,DrawerNavigator,SwitchNavigator, createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import sideMenu from './components/sideMenu.js';
import mainPage from './components/mainPage.js';
import commentsScreen from './components/commentsScreen.js';
import logOutScreen from './components/logOutScreen.js';
import historyScreen from './components/historyScreen.js';
import ServicePage from './components/ServicePage.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import SignedIn from './components/SignedIn';
import { Text,Platform, StatusBar,Button,Image } from "react-native";



export const SignedOut = createStackNavigator({
  SignUp:{
    screen: SignUp,
    navigationOptions:{
      title: "Sign Up",
      header: null,
    }
  },

  SignIn:{
    screen: SignIn,
    navigationOptions:{
      title: "SignIn",
      header: null,
    }
  },

  SignedIn:{
    screen: SignedIn,
    navigationOptions:{
    header:null
  }
},
},
);



export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    }
  );
};
