// Función para ordenar los productos
function ordenarProductos() {
  // Selecciona el elemento con el id "filtro" y lo guarda en una variable
  var filtro = document.getElementById("filtro")
  // Selecciona todos los elementos con la clase "panel" y los guarda en una variable
  var productos = document.getElementsByClassName("panel")

  // Verifica el valor seleccionado en el filtro
  if (filtro.value == "2") {
    // Ordena los productos de menor a mayor precio
    productos.sort(function (a, b) {
      return a.dataset.precio - b.dataset.precio
    })
  } else if (filtro.value == "1") {
    // Ordena los productos de mayor a menor precio
    productos.sort(function (a, b) {
      return b.dataset.precio - a.dataset.precio
    })
  } else if (filtro.value == "3") {
    // Ordena los productos alfabéticamente por nombre
    productos.sort(function (a, b) {
      var nombreA = a.dataset.nombre.toLowerCase()
      var nombreB = b.dataset.nombre.toLowerCase()
      if (nombreA < nombreB) {
        return -1
      } else if (nombreA > nombreB) {
        return 1
      } else {
        return 0
      }
    })
  }

  // Recorre todos los productos y los agrega en el orden correspondiente
  var lista = document.getElementById("lista-productos")
  lista.innerHTML = ""
  for (var i = 0; i < productos.length; i++) {
    lista.appendChild(productos[i])
  }
}

// Evento que se ejecuta al cambiar la selección en el filtro
filtro.addEventListener("change", ordenarProductos)
