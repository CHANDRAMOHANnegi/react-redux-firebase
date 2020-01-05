import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWCTdw9ggqnLcFtOxqgLOdN-H87Lbz4zM",
  authDomain: "housing-1561367427221.firebaseapp.com",
  databaseURL: "https://housing-1561367427221.firebaseio.com",
  projectId: "housing-1561367427221",
  storageBucket: "housing-1561367427221.appspot.com",
  messagingSenderId: "757685336293",
  appId: "1:757685336293:web:da9ddd8faefe7daa503c0c",
  measurementId: "G-FX0Y9QB7FF"
};

firebase.initializeApp(firebaseConfig);
export default firebase;