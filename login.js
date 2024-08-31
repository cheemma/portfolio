import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI--4D3I2iTBF_DmBhE_0tqi8MIrGHEoA",
  authDomain: "login-6e76b.firebaseapp.com",
  projectId: "login-6e76b",
  storageBucket: "login-6e76b.appspot.com",
  messagingSenderId: "920981166132",
  appId: "1:920981166132:web:665a956fac0ca109c19261"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("bnt");

  if (loginButton) {
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Login success");
          window.location.href = "main.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(errorMessage);
        });
    });
  } else {
    console.log("Login button not found");
  }
});