import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList,Modal} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import DatePicker from 'react-native-datepicker';
import {navigationActions} from 'react-navigation';
import servicios from '../components/servicios.js';


{/*import Icon from 'react-native-vector-icons/Ionicons';*/}

 class mainPage extends Component {

   static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      headerStyle:{
        backgroundColor: 'rgb(52,58,139)',
      },
      headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'center',
        paddingLeft:50,
      },
      title: "REALCARWASH",
      headerTintColor:'white',
         headerLeft: (
           <View style={{paddingLeft:20}}>
           <TouchableHighlight
               onPress={()=>{
                 navigation.openDrawer();
               }}>
                 <Image source={require("../images/menuicon.png")}/>
               </TouchableHighlight>
            </View>
      ),
    };
  };


   constructor(props) {
    super(props)
      this.state={
          services:[],
          selectServiceList:[],
          modalVisible:false,
          date:'',
          time: '',
          carsSelected:[],
      }

      this.press = this.press.bind(this);
      this.showSelectedService = this.showSelectedService.bind(this);
      this.pressCarSelector = this.pressCarSelector.bind(this);
  }

  press = (data) => {

     let serviceList = this.state.services;
      serviceList.map((item)=>{
        if(item.service === data.service){
          item.check = !item.check
          if(item.check === true){
              let s = item;
              this.state.selectServiceList.push(s)
            console.log('select'+item.service);
              console.log('item'+JSON.stringify(s));
          }else if(item.check === false){
            const i = this.state.selectServiceList.indexOf(item.service,item.price)
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
          services: serviceList
        }
      )
  }

  componentDidMount(){
    this.setState({
        services:servicios
    })
  }

  showSelectedService() {
   return this.state.selectServiceList.length;
 }

 pressCarSelector=(data)=>{
     if(data >= 1){
       this.state.carsSelected.push(data);
     }
 }



  render() {
    const servicesSelectedList = this.state.selectServiceList
    console.log("servicios seleccionados"+servicesSelectedList);
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
                    {item.check ? <Image source={require("../images/checked.png")}/>: null}
                  </View>
                </View>
            </TouchableHighlight>}
          }

        />


            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={()=>{
                Alert.alert('CLOSE');
              }}>

              <View style={styles.containerButton}>
                    <Text style={{fontSize:25,
                        fontWeight:'bold',
                        color:'#343a8b', textAlign:'center'}} >SERVICIOS QUE ELEGISTE: </Text>

                              {servicesSelectedList.map((serv,id)=>{
                                  console.log('mapping')
                                  return (
                                    <View key={id} style={{width:150 , justifyContent:'center'}}>
                                        <Text style={styles.textService}>{serv.service}</Text>
                                    </View>
                                  )


                                })}




                   <Text>TIPO DE CARRO</Text>


                     <DatePicker
                       style={styles.datePicker}
                       date={this.state.date}
                       mode="date"
                       placeholder="select date"
                       format="YYYY-MM-DD"
                       minDate="2018-05-01"
                       maxDate="2030-06-01"
                       confirmBtnText="Confirm"
                       cancelBtnText="Cancel"
                       onDateChange={(date) => {this.setState({date: date})}}
                       />



                   <DatePicker
                     style={styles.datePicker}
                     date={this.state.time}
                     mode="time"
                     format="HH:mm"
                     confirmBtnText="Confirm"
                     cancelBtnText="Cancel"
                     minuteInterval={10}
                     onDateChange={(time) => {this.setState({time: time});}}
                     />



                  <TouchableHighlight>
                    <View style={styles.buttonLogin}>
                      <Text style={styles.buttonTextModal}>RESERVAR</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                onPress={() => {
              this.setState({modalVisible:!this.state.modalVisible, selectServiceList:[]});
            }}>
                  <View style={styles.buttonLogin}>
                    <Text style={styles.buttonTextModal}>CANCELAR</Text>
                  </View>
              </TouchableHighlight>
              </View>

          </Modal>

          {(servicesSelectedList.length>0) ? (<TouchableHighlight
              style={styles.buttonNext}
              onPress={() => {
            this.setState({modalVisible:true})
          }}>
          <View style={{flexDirection:'row', paddingLeft:180}}>
            <Text style={styles.buttonTextNext}>SIGUIENTE</Text>
            <View style={{marginLeft:20, flexDirection:'row'}}>
            <Image source={require("../images/arrow.png")}/>
            </View>
          </View>
        </TouchableHighlight>): null}


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
    height:60,
    borderWidth:2,
    borderColor:'#2c67b2',
    justifyContent:'space-between',
    padding:10,
  },
  buttonText:{

    color:'white',
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:30,
    paddingTop:10,

  },
  buttonTextNext:{

    color:'#343a8b',
    fontSize:20,
    fontWeight:'bold',
    paddingTop:5,
    paddingLeft:20,

  },
  imageMenu:{
    width:60,
    height:60,
    paddingLeft:30,
  },
  datePicker:{
    width:250,
    borderColor:'#343a8b',
    borderWidth:2,
    borderRadius:5,
    margin:20,

  },
  buttonLogin:{
    backgroundColor:'#343a8b',
    borderRadius:10,
    margin:20,
  },
  containerButton:{
  justifyContent:'center',
  marginLeft:55,
  margin:20,
  },
  buttonTextModal:{
    padding:20,
    color:'white',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
  },

  textService:{
    fontSize:22,
    fontWeight:'bold',
    color:'#343a8b',
  },
  buttonService:{
    display:'flex',
    flexDirection:'row',
    borderColor:'#2c67b2',
  },
})


export default mainPage;
