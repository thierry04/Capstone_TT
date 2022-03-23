
db.collection("blogs").orderBy("timestamp","desc").onSnapshot((blog)=>{
    const data =  blog.docs.map((doc)=>({id:doc.id,data:doc.data()}))

    document.getElementById('landing__blog').innerHTML = data.map((blog)=>(
      `<div class="B_description" key=${blog.id}>
    <img src=${blog.data.ImageUrl} alt="Thierry's photo" />
    <div class="blog-title">
        <h4>${blog.data.Title}</h4>
        <p>
         ${blog.data.Blog}
        </p>
        <a href="./blog.html" onclick="singleBlog('${blog.id}')">
            <button class="btn-blog">Read More</button>
        </a>
    </div>
     </div>`
    )).join("")

})

function singleBlog(id){
    console.log(id)
 localStorage.setItem("singleBlogId",JSON.stringify({id:id}))
}

const blogHtml = document.querySelector('#landing__blog')
async function blogs() {
    const findBlogs = await fetch('http://localhost:5000/api/v1/article', {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Access-Control-Cross-Origin': '*'
        }
    })
    const blogs = await findBlogs.json();

    blogs.foundArticle.map((article, index) => {
        let html = `<div class="B_description" key=${article._id}>
    <img src=${blog.data.ImageUrl} alt="Thierry's photo" />
    <div class="blog-title">
        <h4>${article.Title}</h4>
        <p>
         ${article.content}
        </p>
        <a href="./blog.html" onclick="singleBlog('${article._id}')">
            <button class="btn-blog">Read More</button>
        </a>
    </div>
     </div>`
        blogHtml.innerHTML += html
    })
}
blogs()