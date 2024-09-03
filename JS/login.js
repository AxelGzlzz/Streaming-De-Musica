document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('ingresarFormulario');
    const adminLink = document.getElementById('mostrarAdmin');
    const loginDropdown = document.getElementById('loginDropdown');
    const logoutItem = document.getElementById('logoutItem');

    const validUser = {
        email: 'Grupo4Music@gmail.com',
        contraseña: 'Musica2024'
    };

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const contraseña = document.getElementById('loginPassword').value;

        if (email === validUser.email && contraseña === validUser.contraseña) {
            // Guardar el estado de la sesión en localStorage
            localStorage.setItem('isAuthenticated', 'true');
            adminLink.style.display = 'block';
            loginDropdown.style.display = 'none';
            logoutItem.style.display = 'block';

            const modal = bootstrap.Modal.getInstance(document.getElementById('modalLogin'));
            modal.hide();
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    });

    // Verificar si ya está autenticado al cargar la página
    if (localStorage.getItem('isAuthenticated') === 'true') {
        adminLink.style.display = 'block';
        loginDropdown.style.display = 'none';
        logoutItem.style.display = 'block';
    }

    // Manejar el clic en el botón de logout
    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('isAuthenticated');
        adminLink.style.display = 'none';
        loginDropdown.style.display = 'block';
        logoutItem.style.display = 'none';
        window.location.href = './index.html';  // Redirigir al inicio
    });
});
