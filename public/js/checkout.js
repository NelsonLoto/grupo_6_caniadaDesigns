window.addEventListener('load',()=>{
     
     
     function obtenerProductosLocalStorage(){
          let productosLS = JSON.parse(localStorage.getItem('productos'))
          return productosLS
     }
     
     let productosLocalStorage = obtenerProductosLocalStorage()
     
     if(productosLocalStorage == null){

          document.location.href="/productos"

     }else{

          let dataCarrito = document.querySelector('.data-carrito')
          let montoAPagar= document.querySelector('.montoAPagar')
          let button = document.getElementById('checkout-post')
          let [...stepperSumar]= document.querySelectorAll('.stepper-sumar')
          let [...stepperRestar]= document.querySelectorAll('.stepper-restar')
          let [...cantidadProducto]= document.querySelectorAll('.cantidad-producto')



          stepperSumar.forEach(stepperSuma=>{
               stepperSuma.addEventListener('click', (e)=>{
                   let productoModificado= cantidadProducto.find(producto=>producto.dataset.idProducto == e.target.dataset.idProducto)


                    productoModificado.value = parseInt(productoModificado.value) + 1

                    let productosLocalStorageActualizado = productosLocalStorage.find(element => productoModificado.dataset.idProducto == element.id)

                    productosLocalStorageActualizado.cantidad = productoModificado.value;
                    let posicion = productosLocalStorage.indexOf(productoModificado);

                    if (posicion > -1) {
                         productosLocalStorage.splice(posicion, 1);
                         productosLocalStorage.push(productosLocalStorageActualizado)
                    }

                    localStorage.setItem('productos', JSON.stringify(productosLocalStorage));

               })
          })

          stepperRestar.forEach(stepperResta=>{
               stepperResta.addEventListener('click', (e)=>{
                   let productoModificado= cantidadProducto.find(producto=>producto.dataset.idProducto == e.target.dataset.idProducto)



                    if(productoModificado.value >= 2){productoModificado.value = parseInt(productoModificado.value) - 1}
                    

                    let productosLocalStorageActualizado = productosLocalStorage.find(element => productoModificado.dataset.idProducto == element.id)

                    productosLocalStorageActualizado.cantidad = productoModificado.value;
                    let posicion = productosLocalStorage.indexOf(productoModificado);

                    if (posicion > -1) {
                         productosLocalStorage.splice(posicion, 1);
                         productosLocalStorage.push(productosLocalStorageActualizado)
                    }

                    localStorage.setItem('productos', JSON.stringify(productosLocalStorage));

               })
          })


          let montoAcumulado = 0
          productosLocalStorage.forEach((producto, i) => {
               dataCarrito.innerHTML += 
                    `<input type="text" name="producto${i+1}" value=${producto.id}_${producto.cantidad}_${producto.talle} hidden>`;
               montoAcumulado += producto.precio *producto.cantidad
          });
          dataCarrito.innerHTML += 
          `<input type="number" name="carritoLength" value=${productosLocalStorage.length} hidden>`

          montoAPagar.innerHTML = `$${montoAcumulado * 1.21}`

          
          

          button.addEventListener('click', (e)=>{
                    obtenerProductosLocalStorage();
                    localStorage.clear();
                    window.open("https://www.mercadopago.com.ar", "_blank");
                    document.location.href('/productos');
          })
     }
     
})