const guestName = document.querySelector("#username");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");

const queries = async (e) => {
  e.preventDefault();

  const createQueries = await fetch(
    "https://my-brand-server.herokuapp.com/api/v1/queries/send-message",
    {
      method: "post",
      headers: {
        "content-Type": "application/json",
        "Access-Control-Cross-Origin": "*",
      },
      body: JSON.stringify({
        guestName: guestName.value,
        email: email.value,
        message: comment.value,
      }),
    }
  );
  const data = await createQueries.json();
  console.log(data);
  if (data.status === 201) {
    alert(`${data.message}`);
  } else if (data.status === 400) {
    alert(`${data.message}`);
  } else {
    alert(`${data.message}`);
  }
};

document.getElementById("contact").addEventListener("click", queries);

function contact(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;
  db.collection("contact")
    .add({
      username: username,
      phone: phone,
      email: email,
      comment: comment,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
