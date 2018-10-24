import {  StackNavigator,DrawerNavigator,SwitchNavigator, createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import sideMenu from './components/sideMenu.js';
import mainPage from './components/mainPage.js';
import commentsScreen from './components/commentsScreen.js';
import logOutScreen from './components/logOutScreen.js';
import historyScreen from './components/historyScreen.js';
import ServicePage from './components/servicePage.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import SignedIn from './components/SignedIn';
import { Platform, StatusBar } from "react-native";



export const SignedOut = StackNavigator({
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
  }
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
