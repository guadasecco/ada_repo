// Ejercicio 3 – Constantes / Validación de Edad
//1.	Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, 
// a las cuales les asignarás los valores numéricos 18 y 99 respectivamente.
//2.	Pide al usuario que ingrese su edad.
//3.	Usa “parseInt” para convertir la entrada del usuario a un número entero.
//4.	Valida si la edad ingresada está dentro del rango permitido 
// y muestra un mensaje adecuado.

const prompt = require('prompt-sync')();
//DECLARO LAS CONSTANTES
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
//LE PIDO AL USUARIO DATOS QUE INGRESE SU EDAD
let edadIngresada = prompt("Por favor, ingresa tu edad: ");
//CONVIERTO LA ENTRADA A UN NUMERO ENTERO
let edad = parseInt(edadIngresada);
//VALIDO SI LA EDAD ESTA DENTRO DEL RANGO PERMITIDO
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log("Edad válida. Gracias por participar");
} else {
    console.log("Edad fuera del rango permitido. Debes tener entre 18 y 99 años para participar");
}

// const para declarar valores que no deben cambiar.
//parseInt() para convertir strings en números enteros.
//if y operadores lógicos (>=, <=, &&) para hacer validaciones.

