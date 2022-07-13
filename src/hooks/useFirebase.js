// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCpebug41-6relNiK_5XRDVsva50dtaKDA',
    authDomain: 'fir-zaman.firebaseapp.com',
    databaseURL: 'https://fir-zaman-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'fir-zaman',
    storageBucket: 'fir-zaman.appspot.com',
    messagingSenderId: '601813049292',
    appId: '1:601813049292:web:925da0121ee2ae41f98769',
    measurementId: 'G-Y1LZSRFTWX',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export default firebase;
