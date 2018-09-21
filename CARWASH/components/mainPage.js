import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ServiceMenu from '../components/serviceMenu.js';
import Swiper from 'react-native-swiper';

 class mainPage extends Component {



  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}} >

        <View style={{height:200}} >

          <Swiper horizontal={true} autoplay>
            {promos.map((item,key)=>

                <View key={key} style={{width:420,height:200, backgroundColor:'white'}}>
                <Image style={{flex:1,height: undefined,width:undefined}} resizeMode="contain" source={item.urlImage} />
                    </View>
              )}
          </Swiper>
        {/*<FlatList horizontal={true}
          data={promos}
          renderItem={({item})=>
          <View style={{width:420,height:200, backgroundColor:'white'}}>

          <Image style={{flex:1,height: undefined,width:undefined}} resizeMode="contain" source={item.urlImage} />

          </View>

        }
        keyExtractor={(item, index) => index.toString()}
      />*/}
        </View>

        <View>
          <Text style={styles.textTitle}>HAZ CLIC EN EL SERVICIO DESEADO</Text>
      </View>


      <FlatList
            data={servicios}
            renderItem={({item,index})=>
            <View>
              <TouchableHighlight index={index} style={styles.button} underlayColor="white">
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.imageMenu} source={item.urlImage}/>
                  <Text style={styles.buttonText}>{item.service}</Text>
                </View>
              </TouchableHighlight>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />


      {/*  <ScrollView>

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
*/}
      </View>

    );
  }

}

var promos=[
  {
    urlImage:require("../images/promocion1.png")
  },
  {
    urlImage:require("../images/promocion2.png")
  },
  {
    urlImage:require("../images/LOGOCARWASH.jpg")
  }
]
var servicios=[
  {
    service:'LAVADO',
    urlImage: require("../images/washingcar.png")
  },
  {
    service:'ASPIRADO',
    urlImage: require("../images/vacuum-cleaner.png")
  },
  {
    service:'BAÑO DE CERA',
    urlImage:require("../images/carclean.png"),
  },
  {
    service:'LAVADO DE MOTOR',
    urlImage:require("../images/engine.png"),
  },
  {
    service:'PULIDO',
    urlImage:require("../images/car1.png"),
  },
  {
    service:'HIDRATACION DE INTERIORES',
    urlImage:require("../images/seat.png"),
  },
  {
    service:'LAVADO SALPICADERAS',
    urlImage:require("../images/carfront.png"),
  },
  {
    service:'DESCONTAMINADO',
    urlImage:require("../images/car2.png"),
  },
  {
    service:'ENCERADO',
    urlImage:require("../images/wax.png"),
  },
  {
    service:'LAVADO VESTIDURAS Y CIELO',
    urlImage: require("../images/wax.png"),
  },
  {
    service:'PULIR FAROS',
    urlImage:require("../images/high-beam.png"),
  },
  {
    service:'PULIR RINES',
    urlImage:require("../images/cartire.png"),
  },
  {
    service:'DESMANCHADO POR ZONA',
    urlImage:require("../images/stained.png"),
  }
  ];

const styles = StyleSheet.create({

  textTitle:{
    fontSize:22,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    color:'#343a8b',
  },

  button:{
    backgroundColor:'#343a8b',
    flexDirection:'row',
    height:80,
    borderWidth:2,
    borderColor:'#2c67b2',
    justifyContent:'space-between',
    padding:10,
    marginTop:10,

  },
  buttonText:{

    color:'white',
    fontSize:20,
    fontWeight:'bold',
    paddingTop:10,
    paddingLeft:30,

  },
  imageMenu:{
    width:60,
    height:60,
    paddingLeft:30,
  }
})


export default mainPage;
