import firebase from 'react-native-firebase';

export default class Firebase {
  static init(){
    firebase.initializeApp({
    apiKey: "AIzaSyA17P-RZ8RHcDVXzodDeNgCu4DU-dRSNVo",
     authDomain: "carwash-fc742.firebaseapp.com",
     databaseURL:  "https://carwash-fc742.firebaseio.com",
     projectId: "carwash-fc742",
     storageBucket: "",
   });
  }

}
