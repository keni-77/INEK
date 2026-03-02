// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then(() => {
      window.close();
    })
    .catch(err => {
      console.error(err);
      alert("ログインに失敗しました: " + err.message);
    });
};
