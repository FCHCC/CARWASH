import React , {Component} from 'react';
import {navigationActions} from 'react-navigation';
import {ScrollView,Text, View, StyleSheet,Image} from 'react-native';

class sideMenu extends Component{



  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <View >
            <Text>NOMBRE DE USUARIO</Text>
            <Text>LAVADAS</Text>
          </View>
          <View >
            <Image source={require("./images/profile.png")}/>
          </View>
        </View>

        <ScrollView>
          <View>
            <Text>HISTORIAL</Text>
          </View>
          <View>
            <Text>COMENTARIOS</Text>
          </View>
          <View>
            <Text>CERRAR SESION</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flexDirection:'column'
  },
  containerProfile:{
    height:200,
    backgroundColor:'yellow',
    justifyContent:'center',
    flexDirection:'row',
  }
})
export default sideMenu;
