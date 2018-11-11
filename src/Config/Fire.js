import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCYNZFOIURtHuEekLeT0-4MmOS9Gbc4ujs",
    authDomain: "react-firebase-demo-c4c95.firebaseapp.com",
    databaseURL: "https://react-firebase-demo-c4c95.firebaseio.com",
    projectId: "react-firebase-demo-c4c95",
    storageBucket: "",
    messagingSenderId: "193486762183"
};

const fire = firebase.initializeApp(config);
export default fire;