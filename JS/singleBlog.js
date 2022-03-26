
const Id = JSON.parse(localStorage.getItem('singleBlogId')).id

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
const findOnePost = async () => {
    const onePost = await fetch(
        `https://my-brand-server.herokuapp.com/api/v1/posts/${id}`,
        {
            method: "get",
            headers: {
                "content-Type": "application/json",
                "Access-Control-Cross-Origin": "*",
            },
        }
    );
    const data = await onePost.json();

    if (data.status === 200) {
        alert(`${data.message}`);
        let html = `<div class="main-content">
    <h1 class="post-title">${data.data.title}</h1>
    <img src=${data.data.imageUrl} alt="js photo" />
    <p>
        ${data.data.content}
    </p>
</div> `;
        document.getElementById("singleBlogs").innerHTML += html;
    } else {
        alert(`${data.message}`);
    }
};
findOnePost();
db.collection("blogs")
    .doc(Id)
    .get()
    .then((doc) => {
        const blog = {
            id: doc.id,
            data: doc.data(),
        };
        console.log(blog);

        document.getElementById(
            "singleBlogs"
        ).innerHTML = `<div class="main-content">
            <h1 class="post-title">${blog.data.Title}</h1>
            <img src=${blog.data.ImageUrl} alt="js photo" />
            <p>
                ${blog.data.Blog}
            </p>
        </div> `;
    })
    .catch((error) => {
        console.log(error);
    });



const commentBtn = document.querySelector("#submit-btn");
commentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const documentComment = document.querySelector(".comment").value;
    console.log(documentComment);
    let html = `<p>${documentComment}</p>`;
    const commentList = document.querySelector(".comment-list");
    commentList.innerHTML += html
    console.log("hi there ");
})