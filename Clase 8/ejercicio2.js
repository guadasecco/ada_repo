// Ejercicio 2: Verificar si un número es positivo, negativo o cero
//En este ejercicio, practicarás el uso de condicionales (if, else)
// 1.Pida al usuario que ingrese un número.
// 2. Verifique si el número es positivo, negativo o igual a cero. 3. Muestre un mensaje indicando cuál es el caso.
//Requisitos:
//Utiliza una estructura de control de flujo (if, else if, else) para hacer las verificaciones.
//Usa parseFloat() para convertir la entrada del usuario a un número.

const prompt = require("prompt-sync")();

const numero = parseFloat(prompt("ingrese un numero: "));
if (numero === 0) {    
    console.log(`El número es 0.`);
} else if (numero > 0) {
    console.log('El número es positivo.');
} else if (numero < 0) {   
    console.log('El número es negativo.');
} else {
    console.log('Entrada no válida. Por favor, ingrese un número.');
}