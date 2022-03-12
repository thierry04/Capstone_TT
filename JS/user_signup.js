



function Signup(event){
 event.preventDefault()

 const email = document.getElementById('email').value
 const password = document.getElementById('password').value
 
 firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorMessage)
  });
 
 }

 document.getElementById("signupbtn").addEventListener("click",Signup)