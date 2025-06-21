// Ejercicio 4 – Tipo de Datos: 
//Declaración de Variables:
//1.	Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
//2.	Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
//3.	Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
//4.	Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

const prompt = require('prompt-sync')();

let verdadero = true; // BOLEANO
let texto = "Aprendiendo a programar en JS"; // STRING
let numero = 11; // NUMERO
let nada = null; // AUSENCIA DE VALOR

//OPERACION CON LA VARIABLE BOLEANO
if (verdadero) {
    console.log("La variable 'verdadero' es true.");
} else {
    console.log("La variable 'verdadero' es false");
}

//OPERACION CON LA VARIABLE TEXTO
let mensaje = texto + " Es bastante complejo pero lindo.";
console.log(mensaje);

//OPERACION CON LA VARIABLE NUMERO
let resultado = numero + 9;
console.log("Resultado de la suma:" , resultado);

//OPERCION ASIGNAR VALOR
if (nada === null) {
    console.log("La variable 'nada' es null.");
} else {
    console.log("La variable 'nada' tiene algun valor.");
}