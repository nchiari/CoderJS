// Variables que almacenarán los productos y el resultado de la búsqueda
let productos = []
let resultados = []

// Función para agregar productos a la lista
function agregarProducto(nombre, precio) {
  let producto = {
    nombre: nombre,
    precio: precio,
  }
  productos.push(producto)
}

// Función para guardar los productos en el storage
function guardarProductos() {
  localStorage.setItem("productos", JSON.stringify(productos))
}

// Función para recuperar los productos del storage
function recuperarProductos() {
  productos = JSON.parse(localStorage.getItem("productos"))
  if (!productos) {
    productos = []
  }
}

// Función para buscar productos en la lista
function buscarProducto(busqueda) {
  resultados = []
  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i]
    if (producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || producto.precio.toString().includes(busqueda)) {
      resultados.push(producto)
    }
  }
}

// Función para mostrar los resultados de la búsqueda en el HTML
function mostrarResultados() {
  let contenedor = document.getElementById("resultados")
  contenedor.innerHTML = ""
  for (let i = 0; i < resultados.length; i++) {
    let producto = resultados[i]
    contenedor.innerHTML += "<p>" + producto.nombre + " - $" + producto.precio + "</p>"
  }
}

// Evento para buscar productos cuando se presiona el botón
let boton = document.getElementById("boton")
boton.addEventListener("click", function () {
  let input = document.getElementById("input")
  let busqueda = input.value
  buscarProducto(busqueda)
  mostrarResultados()
})

// Recupera los productos al inicio de la página
recuperarProductos()
