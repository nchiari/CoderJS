// Define una variable para el monto total del carrito
let total = 0

// Crea un array para almacenar los productos añadidos al carrito
let carrito = []

// Crea un array con objetos para almacenar los productos disponibles
let productos = [
  { nombre: "Curso a la Gorra", precio: 0 },
  { nombre: "Libro de JavaScript", precio: 0 },
  { nombre: "Tutorial en video", precio: 0 },
]

// Función que permite al usuario elegir precio y si añade o no al carrito cada producto
function agregarCarrito() {
  for (let i = 0; i < productos.length; i++) {
    // Ciclo que hace repetir esta función 3 veces
    let producto = productos[i]

    producto.precio = parseInt(prompt("Elegí un precio para tu producto " + producto.nombre + ": ")) // El usuario pone el precio y se parsea para que termine siendo integral
    let confirmacion = prompt("¿Querés añadir el producto " + producto.nombre + " al carrito, por el precio de " + producto.precio + "?") // Prompt de confirmación que, además, muestra el nombre del producto y el valor puesto por el usuario
    if (confirmacion.toLowerCase() == "si") {
      // Condicional que dice que, si el usuario pone "si", lo tenga en cuenta para el total, si pone otra cosa no (y además le puse el toLowerCase para que pueda poner "si" de cualquier forma)
      carrito.push(producto) // Añade el producto al carrito
      total += producto.precio // Suma la variable total que definí arriba con 0 a los precios de los productos añadidos al carrito
    }
  }
  alert("Tus productos: " + carrito.map((prod) => prod.nombre).join(", ") + " fueron añadidos al carrito. Total: " + total) // Avisa al usuario sobre el total del carrito
  console.log(carrito)
}

// Invoca la función
agregarCarrito()
