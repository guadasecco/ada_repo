//Ejercicio 5: saludo personalizado
//Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de texto y la función prompt(). 
// Escribe un programa que:
//1. Solicite al usuario que ingrese su nombre.
//2. Muestre un saludo personalizado usando el nombre ingresado.
//Requisitos:
//• Utiliza prompt() para recibir el nombre del usuario.
//• Muestra un mensaje utilizando concatenación de cadenas.

const prompt = require("prompt-sync")();
const nombre = prompt(`Ingrese su nombre`);  // no se usa parseFloat porque es un texto no un numero

console.log(`Bienvenida ${nombre}, te acompañamos en esta nueva aventura`);