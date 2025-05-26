import { auth, createUserWithEmailAndPassword } from "./firebase.js";

let signUp = (e) => {
e.preventDefault()

let email = document.getElementById("email");
let password = document.getElementById("password");
let userName = document.getElementById("username");
let phone = document.getElementById("phone");

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
        if(user.email != "verified"){
          location.href = "../pages/email-verify.html"
        }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        console.log(errorMessage);
    // ..
  });

}

let signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", signUp);