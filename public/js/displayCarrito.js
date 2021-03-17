let dropdownCarrito = document.getElementById('cart')
let totalCarrito = document.querySelector('.total');
let vaciarCarrito = document.querySelector('.vaciarCarrito');
let badge = document.querySelector('.badge');


function obtenerProductosLocalStorage() {
     let productos;
     if (localStorage.getItem('productos') === null) {

       productos = [];

      } else {
       productos= JSON.parse(localStorage.getItem('productos'));
      }  

     return productos;
  }

  function notificacion() {
     let productos = obtenerProductosLocalStorage()
      if (productos == false){
         badge.innerHTML = ""
      } else{
         badge.innerHTML = productos.length//actualiza la cantidad de productos que hay en el carrito, dentro de la burbuja roja en el header.
      }
      return badge
     }

dropdownCarrito.addEventListener('click', () => {
     notificacion();
     let productosLocalStorage= obtenerProductosLocalStorage()

    let ul = document.querySelector('.shopping-cart-items')
    ul.innerHTML= ""; 

    let total = 0;
     productosLocalStorage.forEach(element => {

          let lista = document.createElement("li");
          lista.classList= 'clearfix';

          let img = document.createElement('img')
          img.src = element.img
          console.log(element.img)

          

          ul.appendChild(lista);

          let spanName = document.createElement('span')
          let spanDetail = document.createElement('span')
          let spanPrice= document.createElement('span')
          let spanQuantity=document.createElement('span')

          spanName.classList = 'item-name';
          spanDetail.classList = 'item-detail';
          spanPrice.classList = 'item-price';
          spanQuantity.classList = 'item-quantity';
          
          spanName.innerHTML= element.nombre;
          spanDetail.innerHTML= element.talle
          spanPrice.innerHTML= `$${element.precio * element.cantidad}`;
          spanQuantity.innerHTML= `Cantidad : ${element.cantidad}`;

          lista.appendChild(img);
          lista.appendChild(spanName);
          lista.appendChild(spanPrice);
          lista.appendChild(spanDetail);
          lista.appendChild(spanQuantity);


          let precioPorCantidad = element.precio * element.cantidad;
          total = total + precioPorCantidad
          

          
          
     });

     console.log(total)
     totalCarrito.innerHTML = `$${total}`;


     vaciarCarrito.innerHTML = "X"

     vaciarCarrito.addEventListener('click', (e)=>{
          localStorage.clear()
          ul.innerHTML= "";
          notificacion()
     })



})

