// Crea una función para buscar productos
function buscarProductos() {
  let input = document.getElementById("busqueda").value // Obtiene el valor de la barra de búsqueda
  let productos = JSON.parse(localStorage.getItem("productos")) // Obtiene los productos del local storage y los parsea a un objeto JavaScript
  let resultados = productos.filter(function (producto) {
    // Filtra los productos según el input del usuario
    return producto.nombre.toLowerCase().includes(input.toLowerCase()) || producto.precio.toString().includes(input)
  })
  // Crea una variable para almacenar el HTML de los resultados
  let resultadosHTML = ""
  // Recorre los resultados y crea una fila en la tabla para cada producto
  for (let i = 0; i < resultados.length; i++) {
    resultadosHTML += (
      <tr>
        {" "}
        <td>${resultados[i].nombre}</td> <td>${resultados[i].precio}</td>{" "}
      </tr>
    )
  }
  // Agrega los resultados al HTML
  document.getElementById("resultados").innerHTML = resultadosHTML
}

// Agrega un evento al botón de búsqueda para invocar la función buscarProductos
document.getElementById("boton-busqueda").addEventListener("click", buscarProductos)
document.getElementById("searchBtn").addEventListener("click", function () {
  console.log("Búsqueda realizada")
})
