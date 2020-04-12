import firebase from 'firebase';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyACfUH75FbWcIXa8AX7ARwhUVVHIfRIDvA",
     authDomain: "mytodoapp-842c6.firebaseapp.com",
     databaseURL: "https://mytodoapp-842c6.firebaseio.com",
     projectId: "mytodoapp-842c6",
     storageBucket: "mytodoapp-842c6.appspot.com",
     messagingSenderId: "177787990752",
     appId: "1:177787990752:web:f959d9ff52ed6a624e9685",
     measurementId: "G-H0WP5ZB6P8"
};

firebase.initializeApp(config)

export default firebase
