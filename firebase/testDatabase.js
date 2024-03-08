import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { getApp, getApps, initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCbIKC-vngNWwiZ7W0BWMb-liINWKfak1w",
    authDomain: "furrever-2929.firebaseapp.com",
    projectId: "furrever-2929",
    storageBucket: "furrever-2929.appspot.com",
    messagingSenderId: "280647216005",
    appId: "1:280647216005:web:a562bc342a51f4d58532ec",
    measurementId: "G-ZK7F6RFQ36"
  };

 
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app)

export {app ,storage};





