//funcion

let agregarCarrito= document.querySelector('.contenedor-cards')


agregarCarrito.addEventListener('click', function(e) {
     let productos= []
     
     if(e.target.id == "linkAgregarCarrito"){
          
          if(localStorage != null){
               productos = Object.entries(localStorage);
               productos.forEach(productoYaCargado => {
                    if (productoYaCargado[0] == e.target.dataset.producto){
                              localStorage.removeItem(productoYaCargado[0])
                              console.log(productoYaCargado[1])
                              let viejaCantidad= productoYaCargado[1]
                              let nuevaCantidad = (parseInt(viejaCantidad))+1;
                              localStorage.setItem(e.target.dataset.producto, nuevaCantidad );
                    }
               });
               
          }else{
               console.log("local storage esta vacio")
          }
          localStorage.setItem(e.target.dataset.producto, 1);

     }
})
     


