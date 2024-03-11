import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// https://console.firebase.google.com/u/0/project/furrever-2929/firestore/data/~2FAdoption


const firebaseConfig = {
    apiKey: "AIzaSyCbIKC-vngNWwiZ7W0BWMb-liINWKfak1w",
    authDomain: "furrever-2929.firebaseapp.com",
    projectId: "furrever-2929",
    storageBucket: "furrever-2929.appspot.com",
    messagingSenderId: "280647216005",
    appId: "1:280647216005:web:a562bc342a51f4d58532ec",
    measurementId: "G-ZK7F6RFQ36"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;





// import * as firebase from "firebase/compat";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCbIKC-vngNWwiZ7W0BWMb-liINWKfak1w",
//     authDomain: "furrever-2929.firebaseapp.com",
//     projectId: "furrever-2929",
//     storageBucket: "furrever-2929.appspot.com",
//     messagingSenderId: "280647216005",
//     appId: "1:280647216005:web:a562bc342a51f4d58532ec",
//     measurementId: "G-ZK7F6RFQ36"
//   };
// firebase.initializeApp(firebaseConfig);

// export default firebase;