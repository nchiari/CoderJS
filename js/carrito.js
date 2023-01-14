/* Entrega 1: en este ejercicio voy a simular añadir productos a un carrito de compras, en donde el usuario debe ponerle precio a cada producto
y definir si lo quiere agregar al carrito de compras o no. Con eso calculo el total el base al precio puesto y si fue o no añadido al carrito.
Para ello armé un ciclo que se repite 3 veces (3 productos), con una serie de prompts que preguntan, por un lado, el precio, y por otro,
la confirmación para añadirlo o no al carrito de compras. Y al final, calculo el precio.
*/

// Define una variable para el monto total del carrito
let total = 0

// Función que permite al usuario elegir precio y si añade o no al carrito cada producto
function agregarCarrito() {
  for (let i = 0; i < 3; i++) {
    // Ciclo que hace repetir esta función 3 veces
    let producto = "'Curso a la Gorra'" // Nombre de los productos
    let precio = parseFloat(prompt("Elegí un precio para tu producto " + producto + ": ")) // El usuario pone el precio y se parsea para que termine siendo integral
    let confirmacion = prompt("¿Querés añadir el producto " + producto + " al carrito, por el precio de " + precio + "?") // Prompt de confirmación que, además, muestra el nombre del producto y el valor puesto por el usuario
    if (confirmacion.toLowerCase() == "si") {
      // Condicional que dice que, si el usuario pone "si", lo tenga en cuenta para el total, si pone otra cosa no (y además le pose el toLowerCase para que pueda poner "si" de cualquier forma)
      total += precio // Suma la variable total que definí arriba con 0 a los precios de los productos añadidos al carrito
    }
  }
  alert("Tus productos fueron añadidos al carrito. Total: " + total) // Avisa al usuario sobre el total del carrito
}

// Invoca la función
agregarCarrito()
