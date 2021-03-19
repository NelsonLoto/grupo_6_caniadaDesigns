

window.addEventListener('load', () => {

   
   let agregarCarrito = document.querySelector(".contenedor-cards");
   let agregarCarritoCarrousel = document.querySelector(".contenedor-cardsCarrousel");
   let agregarCarritoDetalle = document.querySelector("#linkAgregarCarritoDetalle");
   let badge = document.querySelector('.badge');

   function obtenerProductosLocalStorage() {

      let productos;
      if (localStorage.getItem('productos') == null) {

         productos = [];

      } else {
         productos = JSON.parse(localStorage.getItem('productos'));
      }

      return productos;
   }

   function notificacion() {
      let productos = obtenerProductosLocalStorage()

      if (productos.length == 0){
         badge.innerHTML = ""
      } else{
         badge.innerHTML = productos.length//actualiza la cantidad de productos que hay en el carrito, dentro de la burbuja roja en el header.
      }
      return badge
   }

   notificacion()

   

   function agregarProductoLocalStorage(idProducto, producto) {
      
      let productosLocalStorage = obtenerProductosLocalStorage();
      let productoData = JSON.parse(producto);


      let productoClickeado = {
         id: idProducto,
         nombre: productoData.nombre,
         precio: productoData.precio,
         talle: productoData.talle.nombre,
         img: `/images/fotosProductos/${productoData.imagen_1}`,
         cantidad: 1
      }

      
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
      
      localStorage.setItem('productos', JSON.stringify(productosLocalStorage));
      notificacion()
   }
   var id = window.location.pathname.split( '/' )[2];
     
   if (window.location.pathname == "/productos"){
      agregarCarrito.addEventListener("click", function (e) {
         if (e.target.id == "linkAgregarCarrito") {
            agregarProductoLocalStorage(e.target.dataset.idProducto, e.target.dataset.producto);
         }
      });
   };
  
   if (typeof id === 'number'){
   agregarCarritoDetalle.addEventListener("click", function (e) {
      if (e.target.id == "linkAgregarCarritoDetalle") {
         agregarProductoLocalStorage(e.target.dataset.idProducto, e.target.dataset.producto)
      }
   });
   }

if (window.location.pathname == "/productos/ver/carrito"){
   let productosLocalStorage = obtenerProductosLocalStorage();
   
   let total = 0;
   productosLocalStorage.forEach(element => {

      let contenedorProductos = document.querySelector('.contenedorProductos')

      contenedorProductos.innerHTML += `<div class="producto 1">
      <div class="imagenProducto"></div>
      <img class="imgProducto" src="${element.img}" alt="">
 </div>
 <div class="detalleProductoCarrito">
      <div class="nombreDescripcion">
           <h4>${element.nombre}</h4>
           <p>Descripción<p>
                     <p>Cantidad</p>
      </div>
      <div class="cantidadYtalle">
           <div>
                <input type="text" value="">
           </div>
           <div class="talles">
                <p>Talle:</p>
                <select name="talle" id="talle">
                     <option value="">...</option>
                     <option value="">XS</option>
                     <option value="">S</option>
                     <option value="">M</option>
                     <option value="">L</option>
                     <option value="">XL</option>
                     <option value="">XXL</option>
                </select>
           </div>

      </div>
 </div>
 
 <div class="precioYeliminar">
                    <h3>$500</h3>
                    <a href=""><img src="/images/eliminar.svg" alt=""></a>
               </div>`
   



});
   

};

})
