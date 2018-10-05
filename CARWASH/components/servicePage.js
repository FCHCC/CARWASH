import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList,Picker,Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {navigationActions} from 'react-navigation';
import servicios from '../components/services.js';

class ServicePage extends Component{

    constructor(props){
      super(props)
        this.state = {
          selectServiceList: this.props.navigation.state.params.selectServiceList
        }
    }


  render(){
    return(
      <View>

          <View>
            <Text style={{fontSize:25,
                fontWeight:'bold',
                color:'#343a8b', textAlign:'center'}} >SERVICIOS QUE ELEGISTE: </Text>
          </View>

          <View style={styles.button}>
            {this.state.selectServiceList.map((service,id)=>{
                return (

                  <View key={id} style={{width:150}}>
                      <Text style={styles.textService}>{service.service}</Text>

                  </View>
                )
              })}

           </View>


           <View>


          

           </View>

      </View>

    )


  }
}



const styles = StyleSheet.create({

    textService:{
      fontSize:22,
      fontWeight:'bold',
      color:'#343a8b',
    },
    button:{
      display:'flex',
      flexDirection:'row',
      borderColor:'#2c67b2',

    }

})

export default ServicePage;
