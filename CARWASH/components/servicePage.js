import React, {Component} from 'react';
import {Text, View,StyleSheet,TouchableHighlight,ScrollView,Image,FlatList,Picker,Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import {navigationActions} from 'react-navigation';
import servicios from '../components/servicios.js';
import ModalSelector from 'react-native-modal-selector';
import DatePicker from 'react-native-datepicker';
import mainPage from '../components/mainPage.js'

class ServicePage extends Component{

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

    constructor(props){
      super(props)
        this.state = {
          selectedServiceList:[],
          carsSelected:[],
          date:'',
           time: '',
        }
    }


press=(data)=>{
    if(data >= 1){
      this.state.carsSelected.push(data);
    }
}

  render(){
    const serv=this.props.navigation.state.params.serv;
    console.log(serv);
    return(
      <View style={{flex:1, backgroundColor:'white'}} >

          <View>
            <Text style={{fontSize:25,
                fontWeight:'bold',
                color:'#343a8b', textAlign:'center'}} >SERVICIOS QUE ELEGISTE: </Text>
          </View>

      {/*  <View style={styles.button}>
            {serviceList.map((service,id)=>{
                return (

                  <View key={id} style={{width:150}}>
                      <Text style={styles.textService}>{service.service}</Text>
                  </View>
                )
              })}

              {serviceList.map((service,id)=>{
                service.cost.map((cost,key)=>{
                  return(
                    <ModalSelector
                      data={cost.car}
                      onChange={()=> this.press(item)}
                      >
                      </ModalSelector>
                    )
                  })
                })}

           </View>*/}

           <View style={styles.containerButton}>
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
               <Text style={styles.buttonText}>RESERVAR</Text>
             </View>
         </TouchableHighlight>

         <TouchableHighlight>
           <View style={styles.buttonLogin}>
             <Text style={styles.buttonText}>CANCELAR</Text>
           </View>
       </TouchableHighlight>
       </View>
      </View>

    )
  }
}



const styles = StyleSheet.create({

    textService:{
      fontSize:22,
      fontWeight:'bold',
      color:'#343a8b',
    },
    button:{
      display:'flex',
      flexDirection:'row',
      borderColor:'#2c67b2',

    },
    buttonLogin:{
      backgroundColor:'#343a8b',
      borderRadius:10,
      margin:20,
    },
    buttonText:{
      padding:20,
      color:'white',
      textAlign:'center',
      fontSize:15,
      fontWeight:'bold',
    },

    containerButton:{
    justifyContent:'center',
    marginLeft:55,
    margin:20,


    },

    datePicker:{
      width:250,
      borderColor:'#343a8b',
      borderWidth:2,
      borderRadius:5,
      margin:20,

    }

})

export default ServicePage;
