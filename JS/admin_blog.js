const blogHtml = document.querySelector('#blogs')
async function blogs(){
    const findBlogs = await fetch('http://localhost:5000/api/v1/article',{
        method:'GET',
        headers:{
            'content-Type':'application/json',
            'Access-Control-Cross-Origin':'*'
        }
    })
    const blogs = await findBlogs.json();
    console.log(blogs,'=== this is blogs');

    blogs.foundArticle.map((article,index)=>{
        console.log(index +1 ,'=======');
        let html = `<tr>
            <td>${index + 1}</td>
            <td>${article.title}</td>
            <td>Twahirwa Thierry</td>
            <td><a href="#" class="edit">edit</a></td>
            <td><a href="#" class="delete">publish</a></td>
            <td><a href="#" class="publish">edit</a></td>
        </tr>`
    blogHtml.innerHTML += html
    })
}
blogs()