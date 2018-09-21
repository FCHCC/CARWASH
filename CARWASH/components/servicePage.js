import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList,Picker} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {navigationActions} from 'react-navigation';
import servicios from '../components/services.js';

class ServicePage extends Component{



  render(){
    return(
      <View>
          <View>
            <Text>LAVADO</Text>
          </View>

          <View>
            <Text>DESCRIPCION DEL PRODUCTO</Text>
            <Text>$$$</Text>
          </View>

          <View>
            <Picker>
              {servicios.map((item,index)=>(
                <Picker.Item key={index} label={item.service} value={item.service}/>
              ))}
            </Picker>
          </View>

      </View>

    )
  }
}


export default ServicePage;
