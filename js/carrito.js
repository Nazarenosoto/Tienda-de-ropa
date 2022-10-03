const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

eventslisteners();

function eventslisteners() 
{

    productos.addEventListener('click', comprarProducto);

    carrito.addEventListener('click', eliminarProducto);

    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

    document.addEventListener('DOMContentLoaded', leerLS)

}

function comprarProducto(e) 
{
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const producto = e.target.parentElement.parentElement;
        leerDatosProduc(producto);
    }    
}


//leer Datos del Producto
function leerDatosProduc(producto) {
    const infoProduc = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    }

    insertarProducto(infoProduc);
}

// insertar Producto en el carrito
function insertarProducto(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${producto.imagen}" width="100"></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td><a href="#" class="borrar-producto text-decoration-none" data-id="${producto.id}">❌</a></td>    
    `;
    listaProductos.appendChild(row);
    guardarProductoLocalStorage(producto);

    //Codigo SweetAlert
    Swal.fire({
        title: "Has agregado este producto al carrito",
        icon: "success",
        confirmButtonText: ":D",
        confirmButtonColor: "green",
        timer: 1500,
    
    })
}

//eliminar Producto del carrito en el DOM
function eliminarProducto(e) 
{
    e.preventDefault();

    let producto, productoId;

    if (e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.remove(); 
    }  
    producto = e.target.parentElement.parentElement;
    productoId = producto.querySelector('a').getAttribute('data-id');   
    eliminarProductoLS(productoId);
}

//vacias Carrito
function vaciarcarrito() 
{
    //Codigo SweetAlert
    Swal.fire({
        title: "Has vaciado el carrito",
        icon: "info",
        confirmButtonText: "OK",
        timer: 2000,
    })
    while(listaProductos.firstChild){
        listaProductos.removeChild(listaProductos.firstChild);
    }    
    //vaciar carrito  de LS
    vaciarLs();

    return false; 
    
}

//almacenar productos al LS
function guardarProductoLocalStorage(producto)
{
    let productos;
    productos = obtenerProductosLocalStorage();
    //El Producto elegido se agrega al Array
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
}


//comprobar que hayan elementos en el LS
function obtenerProductosLocalStorage() 
{
    let productosLS;
    localStorage.getItem('productos') === null ? productosLS = [] : productosLS = JSON.parse(localStorage.getItem('productos')) 
    return productosLS;
}

function leerLS() 
{
    
    let productosLS;
    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function (producto) {
        //Construimos el template
        const row = document.createElement("tr");
        row.innerHTML = `
        <td><img src="${producto.imagen}" width="100"></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td><a href="#" class="borrar-producto text-decoration-none" data-id="${producto.id}">❌</a></td>    
    `;
        listaProductos.appendChild(row);

    })
}

//eliminar producto del LS
function eliminarProductoLS(producto) 
{
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(productoLS, index) {
    productoLS.id === producto && productosLS.splice(index, 1)
    });

    localStorage.setItem('productos', JSON.stringify(productosLS));

}

//eliminar todos los productos
function vaciarLs() {
    localStorage.clear();
}

//Alert SweetAlert
