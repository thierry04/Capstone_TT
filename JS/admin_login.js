function signIn(event){
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    // console.log(email, password)

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage)
  });
}
    
 document.getElementById("signinbtn").addEventListener("click",signIn)
