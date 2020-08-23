import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzTa-5jhncAiydCpGzzhfUVW2kq1GEJac",
  authDomain: "geo-app-85e94.firebaseapp.com",
  databaseURL: "https://geo-app-85e94.firebaseio.com",
  projectId: "geo-app-85e94",
  storageBucket: "geo-app-85e94.appspot.com",
  messagingSenderId: "211218373576",
  appId: "1:211218373576:web:74135b18b2f99664bb3efd",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
