//Loader (Esto lo investigué en un lugar externo al curso)
window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector ('.contenedor_loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})
//Subir productos
//Subir productos
const product = []
let idSolit = 0
class Products{
    constructor(Producto){
        this.Producto = Producto
        this.id = idSolit++
    }
}

const inputProduc = document.getElementById('inputProduc')
const btnProduc = document.getElementById('btnProduc')
const borrarTodo = document.getElementById('borrarTodo')
const listProduc = document.getElementById('listProduc')

btnProduc.addEventListener('click', () =>{
    product.push(new Products(inputProduc.value))
    console.log(product)
    crearProducto()
})

function crearProducto() {
    const Producto = document.createElement('div')
    product.forEach( (x) => {
        Producto.innerHTML = `
        <div class="roww">
                <div class="four colummns">
                    <div class="card">
                        <img src="../img/cards/Ropa-del-usuario.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>${x.Producto}</h4>
                            <p>Argentina</p>
                            <img src="http://programacion.net/files/article/20160811120805_estrellas.png" width="50">
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
                </div>
        </div>
        `
    });
    listProduc.appendChild(Producto)
}
