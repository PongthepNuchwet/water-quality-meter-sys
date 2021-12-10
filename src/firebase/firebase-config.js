import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC4Rp42XHIOcgQ2XM7NLX0O0Zoc7wFXnvY",
  authDomain: "water-quality-meter-sys.firebaseapp.com",
  databaseURL: "https://water-quality-meter-sys-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-quality-meter-sys",
  storageBucket: "water-quality-meter-sys.appspot.com",
  messagingSenderId: "355074543531",
  appId: "1:355074543531:web:f6a0ed19950229ed4c0cee",
  measurementId: "G-DHHMGRQ0Y0"
};

export const myFirebase = initializeApp(firebaseConfig);

// export default app