let dropdownCarrito = document.getElementById('cart')
let totalCarrito = document.querySelector('.total');
let vaciarCarrito = document.querySelector('.vaciarCarrito');


function obtenerProductosLocalStorage() {
     let productos;
     if (localStorage.getItem('productos') === null) {

       productos = [];

      } else {
       productos= JSON.parse(localStorage.getItem('productos'));
      }  

     return productos;
  }



dropdownCarrito.addEventListener('click', () => {
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
          //spanDetail.innerHTML= element.
          spanPrice.innerHTML= `$${element.precio * element.cantidad}`;
          spanQuantity.innerHTML= `Cantidad : ${element.cantidad}`;

          lista.appendChild(img);
          lista.appendChild(spanName);
          lista.appendChild(spanPrice);
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
     })



})

