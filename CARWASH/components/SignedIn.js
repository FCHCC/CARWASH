import {  createStackNavigator,DrawerNavigator,SwitchNavigator, createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import sideMenu from '../components/sideMenu.js';
import mainPage from '../components/mainPage.js';
import commentsScreen from '../components/commentsScreen.js';
import logOutScreen from '../components/logOutScreen.js';
import historyScreen from '../components/historyScreen.js';
import ServicePage from '../components/servicePage.js';
import SignIn from '../components/SignIn.js';
import SignUp from '../components/SignUp.js';
import { Platform, StatusBar } from "react-native";

const mainPageStack = createStackNavigator({
    mainPage:{screen:mainPage}
})

const historyScreenStack = createStackNavigator({
      historyScreen:{screen:historyScreen}
})

const commentsScreenStack = createStackNavigator({
    commentsScreen:{screen:commentsScreen}
})

const logOutScreenStack = createStackNavigator({
  logOutScreen:{screen:logOutScreen}
})

const ServicePageStack = createStackNavigator({
  ServicePage:{screen: ServicePage}
})


export default SignedIn = DrawerNavigator(
  {
  mainPage: mainPageStack,
  historyScreen:historyScreenStack,
  commentsScreen : commentsScreenStack,
  logOutScreen: logOutScreenStack,
  ServicePage:ServicePageStack,
},{
    contentComponent:sideMenu,

  },

);
