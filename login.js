// login.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("メールアドレスとパスワードを入力してください");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // ログイン成功 → このタブを閉じる
      window.close();
    })
    .catch(err => {
      console.error(err);
      alert("ログインに失敗しました: " + err.message);
    });
};
