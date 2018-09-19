import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ServiceMenu from '../components/serviceMenu.js';


 class mainPage extends Component {



  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}} >

        <View style={{height:200}} >
        <ScrollView horizontal pagingEnabled >
          <View style={{width:420,height:200, backgroundColor:'white'}}>

          <Image style={{flex:1,height: undefined,width:undefined}} resizeMode="contain" source={require("../images/promocion1.png")} />

          </View>
        </ScrollView>
        </View>

        <View>
          <Text style={styles.textTitle}>HAZ CLIC EN EL SERVICIO DESEADO</Text>
      </View>

        <ScrollView>

            <ServiceMenu urlImage={require("../images/washingcar.png")} serviceName='LAVADO'/>

            <ServiceMenu serviceName='ASPIRADO' urlImage={require("../images/vacuum-cleaner.png")}/>

            <ServiceMenu serviceName='BAÑO DE CERA' urlImage={require("../images/carclean.png")}/>

            <ServiceMenu serviceName='LAVADO DE MOTOR' urlImage={require("../images/engine.png")}/>

            <ServiceMenu serviceName='PULIDO' urlImage={require("../images/car1.png")}/>

            <ServiceMenu serviceName='HIDRATACION DE INTERIORES' urlImage={require("../images/seat.png")}/>

            <ServiceMenu serviceName='LAVADO SALPICADERAS' urlImage={require("../images/carfront.png")}/>

            <ServiceMenu serviceName='DESCONTAMINADO' urlImage={require("../images/car2.png")}/>

            <ServiceMenu serviceName='ENCERADO' urlImage={require("../images/wax.png")}/>

            <ServiceMenu serviceName='LAVADO VESTIDURAS Y CIELO' urlImage={require("../images/caropen.png")}/>

            <ServiceMenu serviceName='PULIR FAROS' urlImage={require("../images/high-beam.png")}/>

            <ServiceMenu serviceName='PULIR RINES' urlImage={require("../images/cartire.png")}/>

            <ServiceMenu serviceName='DESMANCHADO POR ZONA' urlImage={require("../images/stained.png")}/>
        </ScrollView>

      </View>

    );
  }

}

const styles = StyleSheet.create({

  textTitle:{
    fontSize:22,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    color:'#343a8b',
  }
})


export default mainPage;
