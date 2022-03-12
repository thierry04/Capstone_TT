// create__blog

const CreateBlog = (event) => {
    event.preventDefault()
    const blog__imgurl = document.getElementById("imageFile").files[0]
    const imageName = blog__imgurl.name
    const blogRef = firebase.storage().ref(`Images/${imageName}`)

    const uploadTask = blogRef.put(blog__imgurl)
    const title = document.getElementById('title').value
    const blogData = document.getElementById("myTextarea").value

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Upload is " + progress + "% done")
            switch (snapshot.state) {
                case firebase.storage.TaskState.paused:
                    console.log("uplaoding paused")
                    break
                case firebase.storage.TaskState.running:
                    console.log("uplaod is running")
            }
        },
        (error) => {
            console.log(error)
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadedImage) => {
                db.collection("blogs")
                    .add({
                        Title: title,
                        ImageUrl: downloadedImage,
                        Blog: blogData,
                        CreatedAt: Date.now(),
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then((blogs) => {
                        console.log(blogs)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
        }
    )
}

document.getElementById("create__blog").addEventListener("click", CreateBlog)

db.collection("blogs").orderBy("timestamp", "desc").onSnapshot((blog) => {
    const data = blog.docs.map((doc) => ({ id: doc.id, data: doc.data() }))

    document.getElementById('dashboard_blog__display').innerHTML= data.map((blog) => (
      `  <div class="B_description">
        <img src=${blog.data.ImageUrl} alt="" />
        <div class="blog-title">
          <h4>${blog.data.Title}</h4>
          <p>
          ${blog.data.Blog}
            
          </p>
          <span class="material-icons"onclick="getId('${blog.id}')">edit</span>
          <span class="material-icons" onclick="deleteBlog('${blog.id}')">delete</span>
        </div>
      </div>`
    )).join("")

})

function getId(id){

    localStorage.setItem("blogId",JSON.stringify({id:id}))

      db.collection("blogs").doc(id).get().then((doc)=>{
        document.getElementById('title').value = doc.data().Title
      document.getElementById("myTextarea").value =doc.data().Blog
    }).catch((error)=>{
        console.log(error)
    })
}

    


function updateBlog(event){
    event.preventDefault()


    event.preventDefault()
    const blog__imgurl = document.getElementById("imageFile").files[0]
    const imageName = blog__imgurl.name
    const blogRef = firebase.storage().ref(`Images/${imageName}`)

    const uploadTask = blogRef.put(blog__imgurl)
    const title = document.getElementById('title').value
    const blogData = document.getElementById("myTextarea").value

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Upload is " + progress + "% done")
            switch (snapshot.state) {
                case firebase.storage.TaskState.paused:
                    console.log("uplaoding paused")
                    break
                case firebase.storage.TaskState.running:
                    console.log("uplaod is running")
            }
        },
        (error) => {
            console.log(error)
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadedImage) => {
                db.collection("blogs").doc(JSON.parse(localStorage.getItem("blogId")).id).set({
                        Title: title,
                        ImageUrl: downloadedImage,
                        Blog: blogData,
                        CreatedAt: Date.now(),
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    },
                    {
                    merge:true
                    })
                    .then((blogs) => {
                        console.log(blogs.data())
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
        }
    )

}

document.getElementById("update__blog").addEventListener("click", updateBlog)



function deleteBlog(id){
 db.collection("blogs").doc(id).delete().then(()=>{
  console.log("Blog deleted Successfully")
 }).catch((error)=>{
     console.log(error)
 })

}