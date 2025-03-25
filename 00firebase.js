// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeN0BMkHUoGcjJTDCWqEg1K7ddtObMV94",
  authDomain: "letsupji.firebaseapp.com",
  databaseURL: "https://letsupji-default-rtdb.firebaseio.com",
  projectId: "letsupji",
  storageBucket: "letsupji.firebasestorage.app",
  messagingSenderId: "827695233146",
  appId: "1:827695233146:web:40d770b1219797528b23c3",
  measurementId: "G-K3YT31F1ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
