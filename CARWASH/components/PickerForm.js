import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList,Picker,Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {navigationActions} from 'react-navigation';
import servicios from '../components/services.js';

class PickerForm extends Component{

    constructor(props){
      super(props)
        this.state = {
          selectServiceList: this.props.navigation.state.params.selectServiceList
        }
    }


  render(){
    return(
{this.state.selectServiceList.map((service,id)=>{
  service.price.map(price,key)=>{
    <Picker
      selectedValue={price.car}
      onValueChange={}
      >

    </Picker>
  }
})}

)}
}

const styles = StyleSheet.create({
  
})
export default PickerForm;
