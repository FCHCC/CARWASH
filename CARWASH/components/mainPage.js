import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {navigationActions} from 'react-navigation';
import servicios from '../components/services.js';
 class mainPage extends Component {



  render() {
    return (
      <View style={{flex:1, backgroundColor:'white'}} >

        {/*ANUNCIOS*/}
        <View style={{height:200}} >
          <Swiper horizontal={true} autoplay>
            {promos.map((item,key)=>
                <View key={key} style={{width:420,height:200, backgroundColor:'white'}}>
                <Image style={{flex:1,height: undefined,width:undefined}} resizeMode="contain" source={item.urlImage} />
                    </View>
              )}
          </Swiper>
        </View>

        {/*LEYENDA*/}
        <View>
          <Text style={styles.textTitle}>HAZ CLIC EN EL SERVICIO DESEADO</Text>
      </View>

        {/*BOTONES DE SERVICIOS*/}
      <FlatList
            data={servicios}
            renderItem={({item,index})=>
            <View>
              <TouchableHighlight
                index={index}
                style={styles.button}
                underlayColor="white"
                onPress={()=> this.props.navigation.navigate('ServicePage')}>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.imageMenu} source={item.urlImage}/>
                  <Text style={styles.buttonText}>{item.service}</Text>
                </View>
              </TouchableHighlight>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
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
