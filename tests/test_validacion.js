// Test de verificación para validarTelefono
console.log("Prueba 1 (Solo números '12345678'):", validarTelefono("12345678") === true);
console.log("Prueba 2 (Con letras '1234abc'):", validarTelefono("1234abc") === false);