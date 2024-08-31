/*1- traer los input
2- validarlos
3- analizar si coinciden
4- dar acceso
*/
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('ingresarFormulario');
    const adminLink = document.getElementById('mostrarAdmin');

    // Datos de ejemplo para el login
    const validUser = {
        email: 'Grupo4Music@gmail.com',
        contraseña: 'Musica2024'
    };

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const contraseña = document.getElementById('loginPassword').value;

        if (email === validUser.email && contraseña === validUser.contraseña) {
            // Mostrar el enlace del administrador
            adminLink.style.display = 'block';
            // Cerrar el modal
            $('#modalLogin').modal('hide');
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });
});