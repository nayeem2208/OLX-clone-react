import firebase from "firebase";

import 'firebase/auth';
import 'firebase/firebase';

import 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyDHzx8RrGW-24lPH2Vk7t2dOwUmrBCQhoA",

  authDomain: "react-olx-clone-a4066.firebaseapp.com",

  projectId: "react-olx-clone-a4066",

  storageBucket: "react-olx-clone-a4066.appspot.com",

  messagingSenderId: "763599739112",

  appId: "1:763599739112:web:6d8ae1186837803279115d",

  measurementId: "G-Z5XBBVLT3B"

};

export default firebase.initializeApp(firebaseConfig);