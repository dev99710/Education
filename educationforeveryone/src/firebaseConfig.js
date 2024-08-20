import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCf9lB6yXdLNuvzWHouWvMQbasuqHE1g_c",
  authDomain: "information-everywhere.firebaseapp.com",
  projectId: "information-everywhere",
  storageBucket: "information-everywhere.appspot.com",
  messagingSenderId: "569303068891",
  appId: "1:569303068891:web:f89567716de60b99db1cfe",
  measurementId: "G-E9CFLYGYK1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };