// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { initializeAuth,getReactNativePersistence,getAuth } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4LQiGbEOlJsD2YuvpqQQfRubZ2DFUg2U",
  authDomain: "ecommerce-app-auth-8026c.firebaseapp.com",
  projectId: "ecommerce-app-auth-8026c",
  storageBucket: "ecommerce-app-auth-8026c.firebasestorage.app",
  messagingSenderId: "322679461309",
  appId: "1:322679461309:web:fa36e81957e9ad983f2ed4"
};
let auth;
// Initialize Firebase
if(getApps().length==0){
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
  });
}else{
  auth = getAuth();
}


export default auth;