import { auth, createUserWithEmailAndPassword } from "./firebase.js";

let signUp = (e) => {
e.preventDefault()

let email = document.getElementById("email");
let password = document.getElementById("password");
<<<<<<< HEAD
let userName = document.getElementById("username");
let phone = document.getElementById("phone");
=======
>>>>>>> 8d73d885fa47e813944c718519ce6e5530b94187

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
<<<<<<< HEAD
        if(user.email != "verified"){
          location.href = "../pages/email-verify.html"
        }
=======
        console.log(user)
>>>>>>> 8d73d885fa47e813944c718519ce6e5530b94187
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