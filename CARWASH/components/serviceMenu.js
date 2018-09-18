import React, {Component} from 'react'
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image} from 'react-native';
class ServiceMenu extends Component{

  render(){
    return(
      <View>
        <TouchableHighlight style={styles.button} underlayColor="white">
          <View>
            <Text style={styles.buttonText}>{this.props.serviceName}</Text>
            <Image style={styles.imageMenu} uri={this.props.urlImage}/>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#343a8b',
    flexDirection:'row',
  },
  buttonText:{
    padding:20,
    color:'white',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
  },
  imageMenu:{
    marginTop:5
  }
})

export default ServiceMenu;
