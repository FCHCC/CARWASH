import {  StackNavigator,DrawerNavigator,SwitchNavigator, createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import sideMenu from '../components/sideMenu.js';
import mainPage from '../components/mainPage.js';
import commentsScreen from '../components/commentsScreen.js';
import logOutScreen from '../components/logOutScreen.js';
import historyScreen from '../components/historyScreen.js';
import ServicePage from '../components/servicePage.js';
import SignIn from '../components/SignIn.js';
import SignUp from '../components/SignUp.js';
import { Platform, StatusBar } from "react-native";

export default SignedIn = createDrawerNavigator(
  {
  mainPage: {screen: mainPage},
  historyScreen:{screen: historyScreen},
  commentsScreen : {screen:commentsScreen},
  logOutScreen: {screen: logOutScreen},
  ServicePage:{screen:ServicePage},
},{
    contentComponent:sideMenu,
  },

);
