// Métodos de Array y Operador Spread.

// El método .some() verifica si al menos un elemento cumple con la condición.
const numbers = [1, 3, 5, 7, 9];
const result = numbers.some(value => value % 2 === 0);
console.log('Is there at least one even number?', result);

// El método .findIndex() encuentra el índice del primer elemento que cumple con la condición.
const valueIndex = numbers.findIndex(value => value === 5);
console.log('Index of number 5:', valueIndex);

// El método .reduce() reduce el array a un solo valor aplicando una función acumuladora.
const totalValue = numbers.reduce(
    (accumulator, value) => accumulator + value,
    0
);
console.log('Sum of the numbers:', totalValue);

// El método .filter() filtra los elementos que cumplen con la condición.
const evenValues = numbers.filter(value => value % 2 === 0);
console.log('Pair numbers:', evenValues);

// El método .find() encuentra el primer elemento que cumple con la condición.
const conditionalValue = numbers.find(value => value > 6);
console.log('First number greater than 6:', conditionalValue);

// El método .every() verifica si todos los elementos cumplen con la condición.
const valuesGreaterThanOne = numbers.every(value => value > 1);
console.log('Are all numbers greater than 1?', valuesGreaterThanOne);

// El método .concat combina dos o más arrays.
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'spinach'];
const food = fruits.concat(vegetables);
console.log('Combined foods:', food);

// Operador Spread: otra forma de combinar arrays.
const desserts = ['cake', 'ice cream'];
const menu = [...food, ...desserts];
console.log('Combined menu:', menu);