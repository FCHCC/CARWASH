import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ServiceMenu from '../components/serviceMenu.js';


 class mainPage extends Component {



  render() {
    return (
      <View >

        <View >
          <Text>CARROUSEL DE IMAGENES</Text>
        </View>

        <View>
          <Text>TITULO SERVICIOS</Text>
      </View>

        <ScrollView>

          <View>
            <TouchableHighlight style={styles.button} underlayColor="white">
              <View style={{flexDirection:'row'}}>
                <Text style={styles.buttonText}>LAVADO</Text>
                <Image style={styles.imageMenu} source={require("../images/washingcar.png")}/>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight style={styles.button} underlayColor="white">
              <View style={{flexDirection:'row'}}>
                <Text style={styles.buttonText}>ASPIRADO</Text>
                <Image style={styles.imageMenu} source={require("../images/washingcar.png")}/>
              </View>
            </TouchableHighlight>
          </View>




        </ScrollView>

      </View>

    );
  }

}


const styles = StyleSheet.create({
  button:{
    backgroundColor:'#343a8b',
    flexDirection:'row',
    height:80,
    borderWidth:2,
    borderColor:'#2c67b2',
    justifyContent:'center',
    padding:10,
    marginTop:10,

  },
  buttonText:{

    color:'white',
    fontSize:25,
    fontWeight:'bold',
    paddingTop:10,
    paddingRight:10,

  },
  imageMenu:{
    width:60,
    height:60,

  }
})


export default mainPage;
