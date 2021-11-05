/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCQp8odAzJ3S-BhjaNEME9P_CwVlWHlFB8",
  authDomain: "friendlychat-99027.firebaseapp.com",
  projectId: "friendlychat-99027",
  storageBucket: "friendlychat-99027.appspot.com",
  messagingSenderId: "799444987704",
  appId: "1:799444987704:web:3b0a3cf7e180981af29bcd"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}