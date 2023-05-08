import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4muqD6G2KPlTOFlSSMBV67aqwH8X4HLs",
  authDomain: "predmob-b2d87.firebaseapp.com",
  projectId: "predmob-b2d87",
  storageBucket: "predmob-b2d87.appspot.com",
  messagingSenderId: "328753806085",
  appId: "1:328753806085:web:a9b76a8536b427c80a156c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, app, provider };
