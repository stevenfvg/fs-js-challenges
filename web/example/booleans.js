// Ejemplos de Booleanos.
// Declaración de variables booleanas.
const isTrue = true;
const isFalse = false;

console.log(isTrue); // true
console.log(isFalse); // false

// Operadores de comparación que devuelven booleanos.
const x = 10;
const y = 5;

const isOlder = x > y; // true
const isEqual = x === y; // false

console.log(isOlder);
console.log(isEqual);

// Operadores lógicos que devuelven booleanos.
const and = isTrue && isFalse; // false
const or = isTrue || isFalse; // true
const negation = !isTrue; // false

console.log(and);
console.log(or);
console.log(negation);

// Convirtiendo otros tipos de datos a booleano.
let number = 42;
    string = 'Hello';
    array = [];
    object = {};

number = Boolean(number); // true (cualquier número que no sea 0 es true).
string = Boolean(string); // true (cualquier cadena no vacía es true).
array = Boolean(array); // true (cualquier arreglo no vacío es true).
object = Boolean(object); // true (cualquier objeto no vacío es true).

console.log(number);
console.log(string);
console.log(array);
console.log(object);

// Ejemplo avanzado con el operador ternario:
const authenticated = true;
console.log(authenticated ? 'If it is authenticated' : 'It is not authenticated');