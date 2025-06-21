// Calcula el doble de un numero
//1.Solicitar al usuario que ingrese un numero cualquiera
//2.Calcule el doble de ese numero
//3.Muestre el resultado en la consola

//Requisitos: 
// Utiliza la función prompt() para solicitar el dato al usuario.
//Almacena el número ingresado en una variable.
//Utiliza un operador aritmético para calcular el doble del número.


const prompt = require("prompt-sync")();
let numero = parseFloat(prompt("ingrese un numero: "));
let doble = numero * 2;
console.log(`El doble de ${numero} es ${doble}`);
