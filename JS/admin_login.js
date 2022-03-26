const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

function signIn(event) {
  event.preventDefault();

  // console.log(email, password)

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorMessage);
    });
}

const login = async (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  e.preventDefault();
  const loggedIn = await fetch(
    "https://my-brand-server.herokuapp.com/api/v1/users/login",
    {
      method: "post",
      headers: {
        "content-Type": "application/json",
        "Access-Control-Cross-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  const data = await loggedIn.json();
  localStorage.setItem("token", data.data.token);
  if (data.status === 200) {
    alert(`${data.message}`);
    setTimeout(() => {
      window.location.replace("../admin/posts/index-posts.html");
    }, 1000);
  } else if (data.status === 400) {
    alert(`${data.message}`);
  } else {
    alert(`${data.message}`);
  }
};

document.getElementById("signinbtn").addEventListener("click", login);
