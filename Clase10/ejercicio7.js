// Ejercicio 7: intercambio de valores

const prompt = require('prompt-sync')();

//valores iniciales
let valor1 = 12;
let valor2 = 5;

// variable temporal
let valorTemporal = valor1; // Guardamos valor1 (12) en valorTemporal.
valor1 = valor2; // Le damos a valor1 el valor de valor2 (ahora valor1 vale 5)
valor2 = valorTemporal; // Le damos a valor2 el valor guardado en valorTemporal (que era 12).

console.log(`Después del intercambio (variable temporal): valor1 = ${valor1}, valor2 = ${valor2}`);

// alternativa: asignacion voluntaria
let otroValor1 = 30;
let otroValor2 = 40;

console.log(`Antes del intercambio (asignación simultánea): otroValor1 = ${otroValor1}, otroValor2 = ${otroValor2}`);
[otroValor1, otroValor2] = [otroValor2, otroValor1];
console.log(`Después del intercambio (asignación simultánea): primerValor = ${otroValor1}, segundoValor = ${otroValor2}`);