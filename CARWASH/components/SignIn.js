import React, {Component} from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        KeyboardAvoidingView,
        TouchableOpacity,
        AsyncStorage,
        Image,
        Button,
        TouchableHighlight,
        Alert,
        ActivityIndicator
      } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import firebase from 'react-native-firebase'

class SignIn extends Component{

  constructor(props){
    super(props)
    this.state={
      email:'prueba@correo.com',
      password:'prueba',
      loading:false,
    }

    this.SignInUser = this.SignInUser.bind(this);
  }

  SignInUser = () => {
      this.setState({ loading: true});
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('SignedIn'))
        .then((userData)=>{
          this.setState({
                loading: false
              });
              AsyncStorage.setItem('userData', JSON.stringify(userData));
              this.props.navigation.navigate('SignedIn')
        })
        .catch((error)=>{
          this.setState({
                loading: false
              });
          Alert('ERROR AL INICIAR SESIÓN, INTENTELO NUEVAMENTE'+ error);    
          console.log('LOGIN FAILED' + error);
        })
    }



render(){
  return(
      this.state.loading ? <ActivityIndicator /> : <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>


            <View style={styles.image}><Image style={{width:200,height:200}} source={require('CARWASH/images/LOGOCARWASH.jpg')} /></View>
              <View style={styles.container}>


              <TextInput style={styles.textInput} placeholder='Correo' value={this.state.email} underlineColorAndroid="transparent"
                        onChangeText={(email) => this.setState({email})}/>

              <TextInput style={styles.textInput} placeholder='Contraseña' value={this.state.password} underlineColorAndroid="transparent"
                          onChangeText={(password)=>this.setState({password})}/>

            </View>

            <View style={styles.textContainer }><Text style={styles.text}>¿Olvidaste tu Contraseña?</Text></View>


            <View style={styles.containerButton}>

              <TouchableHighlight onPress={this.SignInUser}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>INICIAR SESION</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight>
                <View style={styles.buttonFacebook}>
                  <Text style={styles.buttonText}>INICIAR SESION CON FACEBOOK</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight>
                <View style={styles.buttonGoogle}>
                  <Text style={styles.buttonText}>INICIAR SESION CON GOOGLE</Text>
                </View>
              </TouchableHighlight>
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
  buttonText:{
    padding:20,
    color:'white',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
  },
  buttonLogin:{
    backgroundColor:'#343a8b',
    borderRadius:10,

  },
  buttonFacebook:{
    backgroundColor:'#3b5998',
    borderRadius:10,
    marginTop:10,
  },
  buttonGoogle:{
    backgroundColor:'#e84f4b',
    borderRadius:10,
    marginTop:10,
  },
  text:{

    textAlign:'right',

  },

  textContainer:{

    paddingRight:50,
  },
  containerButton:{
  justifyContent:'center',
  marginLeft:55,
  margin:20,
  width:300,
  height:170,


  },
})

export default SignIn;
