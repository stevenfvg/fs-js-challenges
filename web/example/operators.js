// Ejemplos de Operadores y typeof.

// Operadores de comparación.
const x = 10;
const y = 5;

console.log(x < y); // false
console.log(x > y); // true
console.log(x >= y); // true
console.log(x <= y); // false

// Igual (compara valor).
console.log(x == y); // false

// Estrictamente igual (compara valor y tipo de dato).
console.log(x === y); // false

// Diferente (compara valor).
console.log(x != y); // true

// Estrictamente diferente (compara valor y tipo de dato).
console.log(x !== y); // true

// typeof: verifica el tipo de dato de una variable.
const string = 'hello';
const number = 42;
const boolean = true;
const array = [1, 2, 3];
const object = { name: 'Steven' };
const nullValue = null;
const undefinedValue = undefined;

console.log(typeof string); // "string"
console.log(typeof number); // "number"
console.log(typeof boolean); // "boolean"
console.log(typeof array); // "object"
console.log(typeof object); // "object"
console.log(typeof nullValue); // "object" (¡Esto es una peculiaridad de JavaScript!).
console.log(typeof undefinedValue); // "undefined"