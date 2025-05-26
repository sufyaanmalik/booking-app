import { auth, sendSignInLinkToEmail } from "./firebase.js";

let verifyEmailFunc = ()=> {

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
        console.log(actionCodeSettings)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}

let emailVerifyBtn = document.getElementById("emailVerifyBtn");
emailVerifyBtn.addEventListener("click" , verifyEmailFunc);



let googleVerifyBtn = document.getElementById("googleVerifyBtn");
googleVerifyBtn.addEventListener("click", verifyEmailFunc)