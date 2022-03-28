
// db.collection("blogs")
//   .orderBy("timestamp", "desc")
//   .onSnapshot((blog) => {
//     const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }));

//     document.getElementById("landing__blog").innerHTML += data
//       .map(
//         (blog) =>
//           `<div class="B_description" key=${blog.id}>
//     <img src=${blog.data.ImageUrl} alt="Thierry's photo" />
//     <div class="blog-title">
//         <h4>${blog.data.Title}</h4>
//         <p>
//          ${blog.data.Blog}
//         </p>
//         <a href="./blog.html" onclick="singleBlog('${blog.id}')">
//             <button class="btn-blog">Read More</button>
//         </a>
//     </div>
//      </div>`
//       )
//       .join("");
//   });

const posts = JSON.parse(localStorage.getItem("posts"));
posts.data.map((post,index) => {
  console.log(post);
  if(index <=3){
       let html = `<div class="B_description" key=${post._id}>
<img src=${post.imageUrl} alt="Thierry's photo" />
<div class="blog-title">
    <h4>${post.title}</h4>
    <p>
     ${post.content}
    </p>
    <a href="./blog.html?id=${post._id}" onclick="singleBlog('${post._id}')">
        <button class="btn-blog">Read More</button>
    </a>
</div>
 </div>`;
  document.getElementById("landing__blog").innerHTML += html;
  }
 
});


function singleBlog(id){
    console.log(id)
 localStorage.setItem("singleBlogId",JSON.stringify({id:id}))
}

