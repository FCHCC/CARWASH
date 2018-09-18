import {DrawerNavigator} from 'react-navigation';
import sideMenu from '../components/sideMenu';
import mainPage from 'CARWASH/components/mainPage';
import commentsScreen from '../components/commentsScreen';
import logOutScreen from '../components/logOutScreen';
import historyScreen from '../components/historyScreen';

const DrawerScreen = DrawerNavigator({
  mainPage: {screen: mainPage},
  historyScreen:{screen: historyScreen},
  commentsScreen : {screen:commentsScreen},
  logOutScreen: {screen: logOutScreen},
},{
  contentComponent:sideMenu,
  headerMode:'none',
})

export default DrawerScreen;
