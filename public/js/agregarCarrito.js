let agregarCarrito = document.querySelector(".contenedor-cards");

    function obtenerProductosLocalStorage() {
       let productos;
       if (localStorage.getItem('productos') === null) {

         productos = [];

        } else {
         productos= JSON.parse(localStorage.getItem('productos'));
        } 
         return productos;
    }

    function agregarProductoLocalStorage(idProducto, producto) { 
       
         let productosLocalStorage = obtenerProductosLocalStorage();
         let productoData = JSON.parse(producto);

         let productoClickeado = {
            id: idProducto,
            nombre:productoData.nombre,
            img: productoData.imagen_1,
            cantidad: 1
         }
         
         let productoExistente = productosLocalStorage.find(element=>element.id == idProducto)
         
         if (productoExistente == undefined){
            productosLocalStorage.push(productoClickeado);
         } else{
            productoClickeado.cantidad = productoExistente.cantidad + 1;
            let posicion = productosLocalStorage.indexOf(productoExistente);

            if(posicion >-1){
               productosLocalStorage.splice(posicion, 1)
            }
            
            productosLocalStorage.push(productoClickeado)
         }
         console.log(`el producto de id ${productoClickeado.id} fue agregado correctamente. Cantidad: ${productoClickeado.cantidad}`);
         
         localStorage.setItem('productos', JSON.stringify(productosLocalStorage))
   }



    agregarCarrito.addEventListener("click", function (e) {

      if (e.target.id == "linkAgregarCarrito") {
         //console.log(e.target.dataset.idProducto)
         //console.log(e.target.dataset.producto)
         agregarProductoLocalStorage(e.target.dataset.idProducto, e.target.dataset.producto)
      }
    }); 


   

 