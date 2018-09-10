import React, {Component} from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        KeyboardAvoidingView,
        TouchableOpacity,
        AsyncStorage,
        Image,
      } from 'react-native';



export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
        username:'',
        password:'',
    };
  }

/**  componentDidMount(){
          this._loadInitialState().done();
  }**/


  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.image}><Image style={{width:200,height:200}} source={require('CARWASH/images/LOGOCARWASH.jpg')} /></View>
              <View style={styles.container}>


              <TextInput style={styles.textInput} placeholder='Usuario' underlineColorAndroid="transparent"
                        onChangeText={(username) => this.setState({username})}/>


              <TextInput style={styles.textInput} placeholder='Contraseña' underlineColorAndroid="transparent"
                          onChangeText={(password)=>this.setState({password})}/>

            </View>

            <View style={styles.textContainer }><Text style={styles.text}>¿Olvidaste tu Contraseña?</Text></View>

            <View>
              
            </View>
        </KeyboardAvoidingView>
    );
  }
}


const styles= StyleSheet.create({
  wrapper:{
    backgroundColor:'#ffffff',
    flex:1,
  },
  container:{
      backgroundColor:'#ffffff',
      justifyContent:'space-between',
      alignItems:'center',
      paddingLeft:40,
      paddingRight:40,
      marginBottom:0,
  },
  header:{},
  viewtextInput:{


  },
  textInput:{
    width:300,
    borderColor:'#343a8b',
    borderWidth:2,
    marginBottom:20,
    borderRadius:5,
  },
  image:{
      alignItems:'center',
      paddingTop:20,
  },
  buttons:{},
  text:{

    textAlign:'right',

  },

  textContainer:{

    paddingRight:50,
  },
})
