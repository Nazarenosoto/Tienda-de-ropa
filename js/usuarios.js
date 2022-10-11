const usuarios = document.querySelector('.usuariosContainer')
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')
const url = 'https://jsonplaceholder.typicode.com/users'
console.log(`${url}/${id}`)
fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('h3')
    name.innerHTML = data.name
    const email = document.createElement('h3')
    email.innerHTML = data.email
    usuarios.appendChild(name)
    usuarios.appendChild(email)
})
.catch(err => console.log(err))