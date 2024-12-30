// Ejemplo de Iteradores.
// Bucle for.
console.log('For loop:');

for (let i = 1; i <= 5; i++) {
    console.log(i % 2 === 0 ? `${i} is EVEN` : `${i} is ODD`);
}

// Ejemplo práctico del Bucle For.
// Ejercicio FizzBuzz de 100 Números.
// 3, 6, 9, 12 ... fizz
// 5, 10, 15, 20 ... buzz
// 15, 30, 45 ... FIZZBUZZ!

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ!!!`);
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`);
    }
}

// Break y Continue en un bucle for.
console.log('For loop with break and continue:');
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break; // Salir del bucle cuando i sea igual a 5.
    }
    if (i === 0) {
        continue; // Saltar a la siguiente iteración cuando i sea igual a 0.
    }
    console.log(i);
}

// Bucle while.
console.log('While loop:');
let j = 1; // Inicializar el while.
while (j <= 5) {
    console.log(j);
    j++; // Incrementar.
}

// Bucle Do-While.
console.log('Do-While loop:');
let k = 1; // Start
do {
    console.log(k);
    k++;
} while (k <= 5);

// forEach en un Array.
console.log('forEach in an Array:');
const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));

// Método .map() en un Array.
console.log('.map() method in an Array');
const numbers = [1, 2, 3];
const squares = numbers.map(value => value ** 2);
console.log(squares);

// For...of en un iterable (Array).
console.log('For...of in an Array:');
const letters = ['a', 'b', 'c'];

for (let letter of letters) {
    console.log(letter);
}

// For...in en un objeto.
console.log('For...in in an object:');
const person = {
    name: 'Steven',
    age: 30,
    city: 'Caracas',
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
