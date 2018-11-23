import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList,Modal} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import DatePicker from 'react-native-datepicker';
import {navigationActions} from 'react-navigation';
import servicios from '../components/servicios.js';
import ModalSelector from 'react-native-modal-selector';
import firebase  from 'react-native-firebase';


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
          time:'',
          carsSelected:[],
          service:[],
          check:false

      }

      this.ref = firebase.firestore().collection('reservas');

      this.press = this.press.bind(this);
      this.showSelectedService = this.showSelectedService.bind(this);
      this.pressCarSelector = this.pressCarSelector.bind(this);
      this.writeReserva = this.writeReserva.bind(this);
  }

  writeReserva=()=>{
    this.state.selectServiceList.map((item)=>{
        item.check = false
      this.state.service.push(item.service);
    })
    this.ref.add({
      Servicio: this.state.service,
      Carro: this.state.carsSelected,
      Fecha: this.state.date,
      Hora: this.state.time,
    })
    .then(()=>{

    this.setState({selectServiceList:[],
      modalVisible:!this.state.modalVisible});
    console.info("date inserted in firebase");
    })
    .catch(error=>{
      console.info("Error inserting data: " + error);
    })
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
    });
    console.info("CHECKED USER IN MAINPAGE");
  }


  showSelectedService() {
   return this.state.selectServiceList.length;
 }

 pressCarSelector(data){

       this.state.carsSelected.push(data);
       console.log('CAR SELECTED IN STATE');

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
                                }
                            )
                        }


                        <ModalSelector
                            data={cars}
                            style={styles.modalSelector}
                            initValue="TIPO CARRO"
                            keyExtractor={item=>item.id}
                            labelExtractor={item=>item.label}
                            animationType='fade'
                            onChange={this.pressCarSelector}
                            />

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

                        <TouchableHighlight onPress={this.writeReserva}>
                          <View style={styles.buttonLogin}>
                            <Text style={styles.buttonTextModal}>RESERVAR</Text>
                          </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                          onPress={() => {
                            this.state.selectServiceList.map((item)=>{
                                item.check = false
                            })
                            this.setState({modalVisible:!this.state.modalVisible, selectServiceList:[]});
                            }}>
                              <View style={styles.buttonLogin}>
                                <Text style={styles.buttonTextModal}>CANCELAR</Text>
                              </View>
                        </TouchableHighlight>
                </View>
            </Modal>

          {(servicesSelectedList.length>0) ? (
            <TouchableHighlight
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

const promos=[
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

const cars =[
  {id:1, label:'PICK-UP'},
  {id:2,label:'AUTO'},
  {id:3, label:'SUV'}
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
  modalSelector:{
    borderColor: '#2c67b2',
  }
})


export default mainPage;
