import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCfJhR6oEU72PvPlCBnAnVSBf_f9Lvrxy4",
  authDomain: "buzzer-df6f8.firebaseapp.com",
  databaseURL: "https://buzzer-df6f8-default-rtdb.firebaseio.com",
  projectId: "buzzer-df6f8",
  storageBucket: "buzzer-df6f8.appspot.com",
  messagingSenderId: "48871955410",
  appId: "1:48871955410:web:aa9782aa159eeff6e2860b",
  measurementId: "G-8HJMWB85VC"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()