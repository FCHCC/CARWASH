import React , {Component} from 'react';
import {navigationActions} from 'react-navigation';
import {ScrollView,Text, View, StyleSheet,Image,TouchableHighlight} from 'react-native';
import firebase  from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';


class sideMenu extends Component{

  constructor(props){
    super(props)

    this.state={
        user: null,
        username:'',
        sessionChecked:false,

    }
    this.SignOut= this.SignOut.bind(this);
    this.UserProfile = this.UserProfile.bind(this);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
         this.setState({sessionChecked: true, user})
         console.info("USERLOGGED");
  })
  }


  SignOut = () => {

    firebase.auth().signOut().then(function() {
      console.log("SignOut SUCCESFULL")
})
.then(()=>this.props.navigation.navigate('SignIn'))
.catch(function(error) {
    console.log(error);
});

  }

  UserProfile =()=>{
    var user = this.state.user

    firebase.auth().currentUser.then(()=>{
    if (user != null) {
      user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      this.setState({
        username:profile.displayName
      })
    });
}
  })
  }



  render(){
    return(
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <View >
            <Text onChange={this.UserProfile} style={styles.textProfile}>{this.state.username}</Text>
            <Text style={styles.textProfile}>LAVADAS</Text>
          </View>
          <View style={styles.containerImageProfile} >
            <Image style={{width:100,height:100}} source={require("../images/profile.png")}/>
          </View>
        </View>

        <ScrollView>

          <View >
            <TouchableHighlight style={styles.containerMenu} underlayColor="#2c67b2"
                onPress={()=> this.props.navigation.navigate('mainPage')}>
                  <Text style={styles.textMenu}>HOME</Text>
                </TouchableHighlight>
          </View>

          <View >
            <TouchableHighlight style={styles.containerMenu} underlayColor="#2c67b2"
                onPress={()=> this.props.navigation.navigate('historyScreen')}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textMenu}>HISTORIAL</Text>
                    <Image style={styles.imageMenu} source={require("../images/history.png")}/>
                </View>
                </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight style={styles.containerMenu} underlayColor="#2c67b2"
                onPress={()=> this.props.navigation.navigate('commentsScreen')}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textMenu}>COMENTARIOS</Text>
                      <Image  style={styles.imageMenu} source={require("../images/chat.png")}/>
                </View>
                </TouchableHighlight>

          </View>

          <View>
            <TouchableHighlight style={styles.containerMenu} underlayColor="#2c67b2"
                onPress={this.SingOut}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.textMenu}>CERRAR SESION</Text>
                      <Image style={styles.imageMenu} source={require("../images/logout.png")}/>
                </View>
                </TouchableHighlight>
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
    flexDirection:'row',
  },
  containerMenu:{

    flexDirection:'row',
    height:80,
    paddingTop:20,
    borderWidth:2,
    borderColor:'#2c67b2',
    marginTop:10,

  },
  textProfile:{
    fontSize:15,
    paddingTop:40,
    paddingLeft:5,
    fontWeight:'bold',
    textDecorationColor:'black',
  },
  textMenu:{

    fontSize:20,
    fontWeight:'bold',
    textDecorationColor:'black',
    paddingRight:30,
    paddingLeft:20,
    alignItems:'center',
    paddingTop:5,
  },

  imageMenu:{
    marginTop:5
  },
  containerImageProfile:{
    flexDirection:'row',
    width:100,
    justifyContent:'center',
    paddingTop:20,
  }
})
export default sideMenu;
