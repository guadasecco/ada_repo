//Ejercicio 2 – Usando las variables: 
//Escribe un programa que pida al usuario que ingrese
// su nombre, su edad y su peso, 
// y luego muestre un mensaje personalizado que incluya toda esta información.
//1.	Pide al usuario que ingrese su nombre.
//2.	Pide al usuario que ingrese su edad.
//3.	Pide al usuario que ingrese su peso.
//4.	Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.

const prompt = require("prompt-sync")();

let nombre = prompt("Como te llamas? ");
let edad = prompt("Cuantos años tenes? ");
let peso = prompt("Cuanto pesas? ");

console.log("Hola" + nombre + ", tenes " + edad + " años y pesas " + peso + " kg." );

