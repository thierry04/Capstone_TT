
const Id = JSON.parse(localStorage.getItem('singleBlogId')).id


db.collection("blogs").doc(Id).get().then((doc) => {

    const blog = {
        id: doc.id,
        data: doc.data()
    }
    console.log(blog);



    document.getElementById('singleBlogs').innerHTML =
        `<div class="main-content">
            <h1 class="post-title">${blog.data.Title}</h1>
            <img src=${blog.data.ImageUrl} alt="js photo" />
            <p>
                ${blog.data.Blog}
            </p>
        </div> `



}).catch((error) => {
    console.log(error)
})
const commentBtn = document.querySelector("#submit-btn");
commentBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const documentComment = document.querySelector(".comment").value;
    console.log(documentComment );
    let html=`<p>${documentComment}</p>`;
    const commentList = document.querySelector(".comment-list");
    commentList.innerHTML += html
    console.log("hi there ");
})