//Ejercicio 6 - Comparaciones y Operadores Lógicos

const prompt = require('prompt-sync')();

// Paso 1: Declarar dos variables con valores numéricos
let numero1 = 17;
let numero2 = 6;

// Paso 2: Verificar si ambos números son mayores que 10 utilizando operadores
let ambosMayoresQueDiez = numero1 > 10 && numero2 > 10;

// Paso 3: Mostrar el resultado de la comparación con console log 
console.log("¿Ambos números son mayores que 10?", ambosMayoresQueDiez);