import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13/firebase-auth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI--4D3I2iTBF_DmBhE_0tqi8MIrGHEoA",
  authDomain: "login-6e76b.firebaseapp.com",
  projectId: "login-6e76b",
  storageBucket: "login-6e76b.appspot.com",
  messagingSenderId: "920981166132",
  appId: "1:920981166132:web:665a956fac0ca109c19261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



// console.log(email, password)
document.addEventListener("DOMContentLoaded", () => {
const register = document.getElementById("btn");
console.log(register)
console.log(document.getElementById("btn"));
register.addEventListener("click", (e) => {
  e.preventDefault();
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Registration success");
    //redirecting to the  login page
    window.location.href = "index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    alert(errorMessage)
    // ..
  });

    // alert(email)
    // console.log(password)
})
})