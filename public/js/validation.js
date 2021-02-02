window.addEventListener('load', function(){
    const form = document.querySelector('#form')
    const nombre = document.querySelector('#nombre')
    const apellido = document.querySelector('#apellido')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const password2 = document.querySelector('#repassword')
    const small = document.querySelectorAll('small')

    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        checkInputs()
        
    } );
    
    function checkInputs(){
        //chequeamos los inputs
    
        let nombreUsuarioValue = nombre.value.trim()
        let apellidoUsuarioValue = apellido.value.trim()
        let emailUsuarioValue = email.value.trim()
        let passwordUsuarioValue = password.value.trim()
        let password2UsuarioValue = password2.value.trim()

    
    
        
        if(nombreUsuarioValue === '') {
            setErrorFor(nombre, 'Debes completar el Nombre');
        } else {
            setSuccessFor(nombre);
        }
        
        if(apellidoUsuarioValue === '') {
            setErrorFor(apellido, 'Debes completar el Apellido');
        } else {
            setSuccessFor(apellido);
        }
        
        if(emailUsuarioValue === '') {
            setErrorFor(email, 'Debes completar el email');
        } else if (!isEmail(emailUsuarioValue)) {
            setErrorFor(email, 'Email no valido');
        } else {
            setSuccessFor(email);
        }
        
        if(passwordUsuarioValue === '') {
            setErrorFor(password, 'Debes completar la password');
        } else if(!isPassword(passwordUsuarioValue)) {
            setErrorFor(password, 'La contraseña debe tener minimo 8 caracteres y una mayuscula ');
        }else if (!isPassword(emailUsuarioValue)) {
            setErrorFor(passwordUsuarioValue, 'Email no valido');
        } else {
            setSuccessFor(password);
        }
        
        if(password2UsuarioValue === '') {
            setErrorFor(password2, 'Debes completar la password');
        } else if(passwordUsuarioValue !== password2UsuarioValue) {
            setErrorFor(password2, 'Passwords no concuerdan');
        } else{
            setSuccessFor(password2);
        }
    }
    
    function setErrorFor(input, message) {
        const formControl = input.parentElement
        const small = formControl.querySelector('small')
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input;
        const small = input.querySelector('small')

        // small.className = 'form-control success';
    }
    
    
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    function isPassword(password) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        .test(password);
    }

    console.log("hola");
})