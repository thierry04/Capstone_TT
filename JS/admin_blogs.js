const postList = async () => {
  const blogHtml = document.getElementById("admin-body");
  const listing = await fetch(
    "https://my-brand-server.herokuapp.com/api/v1/posts",
    {
      method: "get",
      headers: {
        "content-Type": "application/json",
        "Access-Control-Cross-origin": "*",
      },
    }
  );
  const foundData = await listing.json();
  if (foundData.status === 200) {
    alert(`${foundData.message}`);
    localStorage.setItem("posts", JSON.stringify(foundData));
    foundData.data.map((article, index) => {
      const id = article._id;
      console.log(id);
      const title = article.title.slice(0, 30) + "....";
      let html = ` <tr>
      <td>${index + 1}</td>
      <td>${title}</td>
      <td>Twahirwa</td>
      <td><a href="#"class="edit">edit</a></td>
      <td><a href="#"class="publish">publish</a></td>
      <td><a href="#"class="delete" onclick="deletePost(id)">delete</a></td>
    </tr> `;
      blogHtml.innerHTML += html;
    });
  }
};

postList();

function deletePost(id) {
  console.log("hello", id);
}
