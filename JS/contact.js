
document.getElementById("contact").addEventListener("click", contact)

function contact(event) {
  event.preventDefault()

  const username = document.getElementById('username').value
  const phone = document.getElementById('phone').value
  const email = document.getElementById('email').value
  const comment = document.getElementById('comment').value
  db.collection("contact").add({
    username: username,
    phone: phone,
    email: email,
    comment: comment
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })

}




