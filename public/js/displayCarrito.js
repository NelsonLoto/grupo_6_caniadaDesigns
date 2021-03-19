window.addEventListener('load',()=>{
//let body = document.querySelector('body')
let dropdownCarrito = document.getElementById('cart')
let totalCarrito = document.querySelector('.total');
let vaciarCarrito = document.querySelector('.vaciarCarrito');
let ul = document.querySelector('.shopping-cart-items')

let badge = document.querySelector('.badge');


function obtenerProductosLocalStorage() {
     let productos;
     if (localStorage.getItem('productos') == null) {

       productos = [];

      } else {
       productos= JSON.parse(localStorage.getItem('productos'));
      }  

     return productos;
  }

function notificacion() {
     let productos = obtenerProductosLocalStorage()
      if (productos.length == 0){
         badge.innerHTML = ""
     }
         else{
          badge.innerHTML = productos.length//actualiza la cantidad de productos que hay en el carrito, dentro de la burbuja roja en el header.
       }
      return badge
}

  
  
  dropdownCarrito.addEventListener('click', () => {
     let productosLocalStorage= obtenerProductosLocalStorage()

     ul.innerHTML= ""; 

     let total = 0;
     productosLocalStorage.forEach(element => {

          ul.innerHTML += `<li class="clearfix">
          <img src="${element.img}" alt="item ${element.id_producto}" />
               <span class="item-name">${element.nombre}</span>
               <span class="item-detail">Talle ${element.talle}</span>
               <span class="item-price">$ ${element.precio * element.cantidad}</span>
               <span class="item-quantity">Cantidad: ${element.cantidad}</span>
               <span class="item-delete"><i class="far fa-trash-alt" data-id-producto=${element.id}></i></span>
               <div class="separador"></div>
          </li>
          `

          let precioPorCantidad = element.precio * element.cantidad;
          total = total + precioPorCantidad

          // let lista = document.createElement("li");
          // lista.classList= 'clearfix';
          // let img = document.createElement('img')
          // img.src = element.img
          // console.log(element.img)
          // ul.appendChild(lista);
          // let spanName = document.createElement('span')
          // let spanDetail = document.createElement('span')
          // let spanPrice= document.createElement('span')
          // let spanQuantity=document.createElement('span')
          // spanName.classList = 'item-name';
          // spanDetail.classList = 'item-detail';
          // spanPrice.classList = 'item-price';
          // spanQuantity.classList = 'item-quantity';
          // spanName.innerHTML= element.nombre;
          // spanDetail.innerHTML= element.talle
          // spanPrice.innerHTML= `$${element.precio * element.cantidad}`;
          // spanQuantity.innerHTML= `Cantidad : ${element.cantidad}`;
          // lista.appendChild(img);
          // lista.appendChild(spanName);
          // lista.appendChild(spanPrice);
          // lista.appendChild(spanDetail);
          // lista.appendChild(spanQuantity);


     });
     totalCarrito.innerHTML = `$${total}`;

     if(productosLocalStorage != null){
          let eliminarItem = document.querySelector('.item-delete');

          eliminarItem.addEventListener('click', (e)=>{

     
          let idProducto = e.target.dataset.idProducto
          
          let productoExistente = productosLocalStorage.find(element => element.id == idProducto)
          
          let posicion = productosLocalStorage.indexOf(productoExistente);
          
          if (posicion > -1) {
               productosLocalStorage.splice(posicion, 1)
          }

          localStorage.setItem('productos', JSON.stringify(productosLocalStorage));
          
          notificacion();

           })
     }

     vaciarCarrito.innerHTML = "Vaciar carrito"

     vaciarCarrito.addEventListener('click', (e)=>{
          //let divParent =((e.target.parentElement).parentElement).parentElement;
          localStorage.clear();
          ul.innerHTML= "";
          notificacion();

          
          //let modal;
          // modal = document.createElement('div')
          // modal.classList= 'modalConfirmacion'
          // modal.innerHTML += `
          //           <div class="card-modal-confirmacion">
          //                <p>Eliminar todos los productos del carrito?</p>
          //                <div class="buttons">
          //                     <a href="#" class="confirmarVaciarCarrito">Confirmar</a>

          //                </div>
          //           </div>`;
          
          // body.append(modal)

          // let confirmarVaciarCarrito = document.querySelector('.confirmarVaciarCarrito');
          // console.log(confirmarVaciarCarrito)
          // if (confirmarVaciarCarrito != undefined){
          // confirmarVaciarCarrito.addEventListener('click', ()=>{
          //      console.log('porque mierda no funciona?')
          //      localStorage.clear();
          //      ul.innerHTML= "";
          //      modal.classList = 'modalConfirmacion hidden';
          //      notificacion();
          //      console.log(ul)
               
          // })
          // let cancelarVaciarCarrito = document.querySelector('.cancelarVaciarCarrito')

          // cancelarVaciarCarrito.addEventListener('click', ()=>{
          //      modal.classList = 'hidden'
          // } )
     })


})})