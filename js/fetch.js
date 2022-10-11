//Fetch
const usuarios = document.querySelector('.usuariosContainer')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(usuario => {
        console.log(usuario.name)
        const p = document.createElement('h5')
        p.setAttribute('id', usuario.id)
        p.innerHTML = usuario.name
        p.addEventListener('click', function(){
            window.location.href = `../extensions/usuarios.html?id=${usuario.id}`
        })
        usuarios.appendChild(p)
    });
})
.catch(err => console.log(err))