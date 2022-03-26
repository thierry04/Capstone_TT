



function Signup(event) {
  event.preventDefault();
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });
}

const userSignUp = async (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const signedUp = await fetch(
    "https://my-brand-server.herokuapp.com/api/v1/users/register",
    {
      method: "post",
      headers: {
        "content-Type": "application/json",
        "Access-Control-Cross-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    }
  );

  const data = await signedUp.json();
  if (data.status === 201) {
    alert(`${data.message}`);
    setTimeout(() => {
      window.location.replace("../admin_login.html");
    });
  } else if (data.status === 400) {
    alert(`${data.message}`);
  } else {
    alert("have not been able to register you please try again later");
  }
};

document.getElementById("signupbtn").addEventListener("click", userSignUp);