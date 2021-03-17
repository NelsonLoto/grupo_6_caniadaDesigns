window.addEventListener('load', () => {
   let agregarCarrito = document.querySelector(".contenedor-cards");
   let agregarCarritoCarrousel = document.querySelector(".contenedor-cardsCarrousel");
   let agregarCarritoDetalle = document.querySelector("#linkAgregarCarritoDetalle");

   (function notificacion() {
      let productos = obtenerProductosLocalStorage()
      let badge = document.querySelector('.badge');

      badge.innerHTML = productos.length//actualiza la cantidad de productos que hay en el carrito, dentro de la burbuja roja en el header.

      // if (productos = []){
      //    badge.innerHTML = ""
      // } else{
      //    badge.innerHTML = productos.length//actualiza la cantidad de productos que hay en el carrito, dentro de la burbuja roja en el header.
      // }

   })()

   function obtenerProductosLocalStorage() {

      let productos;
      if (localStorage.getItem('productos') === null) {

         productos = [];

      } else {
         productos = JSON.parse(localStorage.getItem('productos'));
      }

      return productos;
   }

   function agregarProductoLocalStorage(idProducto, producto) {

      let productosLocalStorage = obtenerProductosLocalStorage();
      let productoData = JSON.parse(producto);


      let productoClickeado = {
         id: idProducto,
         nombre: productoData.nombre,
         precio: productoData.precio,
         talle: productoData.talle,
         img: `/images/fotosProductos/${productoData.imagen_1}`,
         cantidad: 1
      }

      console.log(productoData)

      let productoExistente = productosLocalStorage.find(element => element.id == idProducto)

      if (productoExistente == undefined) {
         productosLocalStorage.push(productoClickeado);
      } else {
         productoClickeado.cantidad = productoExistente.cantidad + 1;
         let posicion = productosLocalStorage.indexOf(productoExistente);

         if (posicion > -1) {
            productosLocalStorage.splice(posicion, 1)
         }

         productosLocalStorage.push(productoClickeado)
      }
      console.log(`el producto de id ${productoClickeado.id} fue agregado correctamente. Cantidad: ${productoClickeado.cantidad}`);

      localStorage.setItem('productos', JSON.stringify(productosLocalStorage))
   }

   if (window.location.pathname == "/productos"){
      agregarCarrito.addEventListener("click", function (e) {
         console.log(e)
         if (e.target.id == "linkAgregarCarrito" || e.target.id == "linkAgregarCarritoCarrousel") {
            agregarProductoLocalStorage(e.target.dataset.idProducto, e.target.dataset.producto)
         }
      });
   } 
   agregarCarritoCarrousel.addEventListener("click", function (e) {
      if (e.target.id == "linkAgregarCarritoCarrousel") {
         agregarProductoLocalStorage(e.target.dataset.idProducto, e.target.dataset.producto)
      }
   });

   agregarCarritoDetalle.addEventListener("click", function (e) {
      if (e.target.id == "linkAgregarCarritoDetalle") {
         agregarProductoLocalStorage(e.target.dataset.idProducto, e.target.dataset.producto)
      }
   });
});












