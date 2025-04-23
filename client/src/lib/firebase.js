// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDRyx_Pz2Ak53ZMU8KcwpjFFifnBq7s860",
//   authDomain: "carboncreditcoin-ed0fe.firebaseapp.com",
//   projectId: "carboncreditcoin-ed0fe",
//   storageBucket: "carboncreditcoin-ed0fe.firebasestorage.app",
//   messagingSenderId: "890633246002",
//   appId: "1:890633246002:web:d999f1c98ac6fc1ae5732b",
//   measurementId: "G-SKHT7EZ18L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export { auth };

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";   // ✅ Add this line

// const firebaseConfig = {
//   apiKey: "AIzaSyDRyx_Pz2Ak53ZMU8KcwpjFFifnBq7s860",
//   authDomain: "carboncreditcoin-ed0fe.firebaseapp.com",
//   projectId: "carboncreditcoin-ed0fe",
//   storageBucket: "carboncreditcoin-ed0fe.appspot.com",   // ✅ Minor fix: should be .app**spot**.com
//   messagingSenderId: "890633246002",
//   appId: "1:890633246002:web:d999f1c98ac6fc1ae5732b",
//   measurementId: "G-SKHT7EZ18L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // ✅ Initialize Auth properly
// const auth = getAuth(app);

// // Export auth for use in hooks and components
// export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };