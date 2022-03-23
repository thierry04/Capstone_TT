// function signIn(event){
//     event.preventDefault()

//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value

//     // console.log(email, password)

//     firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     console.log(errorMessage)
//   });
// }
    
async function login(e){
  try{
    e.preventDefault();
    
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value;
    const connect = await fetch('http://localhost:5000/api/v1/user/login',{
      method:'POST',
      headers:{
        'content-Type':'application/json',
        'Access-Control-Cross-Origin':"*"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data = await connect.json();
    console.log(data, 'this is it working');
    localStorage.setItem('token', data.token);
    setTimeout(()=>{
      window.location.replace('/admin/posts/index-posts.html')
    },5000)
    // console.log(connect.body, 'is now loggedIn');
  }catch(err){
    console.log(err);
  }
  
  
}
document.getElementById("signinbtn").addEventListener("click",login)