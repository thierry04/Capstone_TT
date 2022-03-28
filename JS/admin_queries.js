const loggedIn = localStorage.getItem("token");
console.log(loggedIn);
const findQueries = async () => {
  let queryHtml = document.querySelector("#admin-body-queries");
  const queries = await fetch(
    "https://my-brand-server.herokuapp.com/api/v1/queries/all-messages",
    {
      method: "get",
      headers: {
        authorization: `Bearer ${loggedIn}`,
      },
    }
  );
  const data = await queries.json();
  if (data.status === 200) {
    alert(`${data.message}`);
    data.data.map((query, index) => {
      let html = ` <tr>
      <td>${index + 1}</td>
      <td>${query.guestName}</td>
      <td>${query.message}</td>
      <td><a href="#"class="edit">reply</a></td>
    </tr> `;
      queryHtml.innerHTML += html;
    });
  } else if (data.status === 400) {
    alert(`${data.message}`);
  } else {
    alert(`${data.message}`);
  }
};
findQueries();
