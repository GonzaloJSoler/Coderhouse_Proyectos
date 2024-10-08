//Primer Pre-entrega - SIMULADOR REGISTRO DE DATOS
function validarEmail(email) {
    // Expresión regular para validar el formato del email
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function validarTelefono(telefono) {
    // Verificar que solo contenga números y tenga entre 7 y 15 dígitos
    let regex = /^\d{7,15}$/;
    return regex.test(telefono);
}
function registrarDatos() {
    // Solicitar el nombre del usuario
    let nombre;
    do {
        nombre = prompt("Ingrese su nombre (solo letras):");
        if (nombre === null || nombre.trim() === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
            alert("Por favor, ingrese un nombre válido.");
            nombre = null;
        }
    } while (!nombre);
    // Solicitar el número de teléfono del usuario
    let telefono;
    do {
        telefono = prompt("Ingrese su número de teléfono (solo números, entre 7 y 15 dígitos):");
        if (telefono === null || !validarTelefono(telefono)) {
            alert("Por favor, ingrese un número de teléfono válido.");
            telefono = null;
        }
    } while (!telefono);
    // Solicitar el correo electrónico del usuario
    let email;
    do {
        email = prompt("Ingrese su correo electrónico:");
        if (email === null || !validarEmail(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            email = null;
        }
    } while (!email);
    // Mostrar un resumen de los datos ingresados
    alert("Datos ingresados:\nNombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${email}");
}

registrarDatos();


