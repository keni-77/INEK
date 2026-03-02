// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("メールアドレスとパスワードを入力してください");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    window.close();
  } catch (err) {
    console.error(err);
    alert("登録に失敗しました: " + err.message);
  }
};
