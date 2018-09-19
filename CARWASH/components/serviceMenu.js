import React, {Component} from 'react'
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image} from 'react-native';
class ServiceMenu extends Component{

  render(){
    return(
      <View>
        <TouchableHighlight style={styles.button} underlayColor="white">
          <View style={{flexDirection:'row'}}>
              <Image style={styles.imageMenu} source={this.props.urlImage}/>
            <Text style={styles.buttonText}>{this.props.serviceName}</Text>



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
    height:80,
    borderWidth:2,
    borderColor:'#2c67b2',
    justifyContent:'space-between',
    padding:10,
    marginTop:10,

  },
  buttonText:{

    color:'white',
    fontSize:25,
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

export default ServiceMenu;
