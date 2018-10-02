import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {navigationActions} from 'react-navigation';
import servicios from '../components/services.js';
import Icon from 'react-native-vector-icons/Ionicons';

 class mainPage extends Component {

   constructor(props) {
    super(props)
      this.state={
          services:servicios,
          selectServiceList:[],
      }
  }

  press = (data) => {
      this.state.services.map((item)=>{
        if(item.service === data.service){
          item.check = !item.check
          if(item.check === true){
            this.state.selectServiceList.push(item);
            console.log('select'+item.service);
          }else if(item.check === false){
            const i = this.state.selectServiceList.indexOf(item)
            if(1 != -1){
                this.state.selectServiceList.splice(i,1);
                console.log('unselect:'+item.service)
                return this.state.selectServiceList
            }
          }
        }
      })

      this.setState(
        {
          services: this.state.services
        }
      )
  }

  _showSelectedContact() {
   return this.state.selectServiceList.length;
 }

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
            data={this.state.services}
            keyExtractor={item => item.service}
            extraData={this.state}

            renderItem={({item,index})=>
              {return <TouchableHighlight
                index={index}
                style={styles.button}
                underlayColor="white"
                onPress={()=> {this.press(item)}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={styles.imageMenu} source={item.urlImage}/>
                  <Text style={styles.buttonText}>{item.service}</Text>
                  <View style={{marginLeft:10, flexDirection:'row'}}>
                {item.check ? (
                  <Icon name='ios-checkmark-circle' size={50} color='white'></Icon>)
                    : null}
                </View>
              </View>
            </TouchableHighlight>}
          }

        />

          {(this.state.selectServiceList.length>0) ? (
            <TouchableHighlight style={styles.buttonNext}>
              <View style={{flexDirection:'row'}}>
            <Text style={styles.buttonTextNext}>SIGUIENTE</Text>
              <View style={{marginLeft:10, flexDirection:'row'}}>
                <Icon name='ios-arrow-forward' size={50} color='#343a8b'></Icon>
              </View>
            </View>
          </TouchableHighlight>):null}

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
  buttonNext:{
    backgroundColor:'#E6E6FA',
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
    paddingLeft:20,

  },
  buttonTextNext:{

    color:'#343a8b',
    fontSize:20,
    fontWeight:'bold',
    paddingTop:10,
    paddingLeft:20,

  },
  imageMenu:{
    width:60,
    height:60,
    paddingLeft:30,
  }
})


export default mainPage;
