import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAq2zxJ-jBfLK_7dcBFNZkcP63-rs5WmCA",
  authDomain: "tracker-3211f.firebaseapp.com",
  projectId: "tracker-3211f",
  storageBucket: "tracker-3211f.appspot.com",
  messagingSenderId: "812170287226",
  appId: "1:812170287226:web:aaf6c1947d32666aba83c3",
  measurementId: "G-8ZV6FX3JP8"
};

const fire = firebase.initializeApp(config);
export default fire;