import React , {Component} from 'react';
import {navigationActions} from 'react-navigation';
import {ScrollView,Text, View, StyleSheet,Image,TouchableHighlight} from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase';


class sideMenu extends Component{

  constructor(props){
    super(props)

    this.state={
        user: [],
        username:'',
        sessionChecked:false,

    }
    this.SignOutUser= this.SignOutUser.bind(this);


  }

  componentDidMount(){
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      console.info(`changed User : ${JSON.stringify(user)}`);
      this.state.user.push(user);
      console.info(this.state.user);
      this.setState({
        sessionChecked:true
      });
    })



   }

  SignOutUser = () => {
    firebase.auth().signOut()
    .then(()=>this.props.navigation.navigate('SignIn'))
    .catch(function(error) {
      console.log(error);
      });
  }



  render(){

    return(
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <View >

            {this.state.user.map((u,item)=>{
              console.log(u.email);
              return(
              <Text key={item} style={styles.textProfile}>{u.email}</Text>
            )
            })
          }

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
                onPress={()=>this.SignOutUser()}>
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
