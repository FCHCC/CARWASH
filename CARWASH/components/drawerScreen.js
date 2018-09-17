import {DrawerNavigator} from 'react-navigation';
import sideMenu from '../components/sideMenu';
import mainPage from 'CARWASH/components/mainPage';
import commentsScreen from '../components/commentsScreen';
import logOutScreen from '../components/logOutScreen';

const DrawerScreen = DrawerNavigator({
  mainPage: {screen: mainPage},
  commentsScreen : {screen:commentsScreen},
  logOutScreen: {screen: logOutScreen},
},{
  contentComponent:sideMenu,
  headerMode:'none',
})

export default DrawerScreen;
