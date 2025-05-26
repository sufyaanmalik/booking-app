import { auth, createUserWithEmailAndPassword } from "./firebase.js";

let signUp = (e) => {
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });

}

let signUpForm = document.querySelector("form");
signUpForm.addEventListener("submit", signUp);