import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import DrawerScreen from './drawerScreen';

const DrawerNavigation = StackNavigator({

  DrawerStack:{screen: DrawerScreen}
},{
    headerMode:'float',
    navigationOptions:({navigation})=>({
      headerStyle:{
        backgroundColor: 'rgb(52,58,139)',
        paddingLeft:10,
        paddingRight:10
      },
      title:'REAL CAR WASH',
      headerTintColor:'white',
      headerLeft:<View>
        <TouchableHighlight
            onPress={()=>{
                if(navigation.state.index===0){
                  navigation.navigate('DraweOpen');
                }else{
                  navigation.navigate('DrawerClose');
                }
            }}>
              <Text>Menu</Text>
            </TouchableHighlight>
      </View>
    })
})

export default DrawerNavigation;
