const userHtml = document.querySelector('#user')
async function users() {
    const findUsers = await fetch('http://localhost:5000/api/v1/user', {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            'Access-Control-Cross-Origin': '*'
        }
    })
    const userFound = await findUsers.json();

    userFound.foundUser.map((user, index) => {
        let html = `<tr>
            <td>${index + 1}</td>
            <td>${user.Username}</td>
            <td>Author</td>
            <td><a href="#" class="edit">edit</a></td>
            <td><a href="#" class="publish">delete</a></td>
        </tr>`
        userHtml.innerHTML += html
    })
}
users()