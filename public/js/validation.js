let inputEmail = document.querySelector('#email')
let errorEmail = document.querySelector('.errorEmailFront')
let emailRegex = "/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
let form = document.querySelector('form')
document.querySelector('#botonIngreso').style.backgroundColor = "gray"
console.log("Conectado al script ");




//evita que puedan hacer submit
form.addEventListener('submit', (e) => {
    let mensajes = []
    if(inputEmail.value === "" || inputEmail.value == null || inputEmail.value != emailRegex){
        errorEmail.innerText = "Ingrese una dirección de correo válida"
        mensajes.push("Debe Ingresar una dirección de email válida")       
    }


    if(mensajes.length > 0){
        e.preventDefault()
       
        console.log("hay errores");
    }
})