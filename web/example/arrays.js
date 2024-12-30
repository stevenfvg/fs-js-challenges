// Ejemplos de Arrays.
// Crear un array:
const fruits = ['Apple', 'Banana', 'Grape'];
console.table(fruits);

// Acceder a los valores del array.
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Grape"

// Medir la longitud del array.
const length = fruits.length;
console.log(`Array length: ${length}`); // 3

// Recorrer el array con un bucle for.
console.log('Looping through the array with a for loop:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Recorrer el array con forEach.
console.log('Looping through the array with forEach:');
fruits.forEach(fruit => {
    console.log(fruit);
});

// Iterar y transformar el array 'frutas' con .map
console.log('Show fruits in uppercase');
const fruitsInUppercase = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsInUppercase);

// Agregar valores al principio del array.
fruits.unshift('Raspberry');
console.log("Array after adding 'Raspberry':", fruits);

// Agregar valores al final del array.
fruits.push('Strawberry');
console.log("Array after adding 'Strawberry':", fruits);

// Usando el operador Spread.
let copyOfTheFruitsArray;
// Agregar valor para comenzar en la copia del array.
copyOfTheFruitsArray = ['Peach', ...fruits];
console.log("Array after adding 'Peach':", copyOfTheFruitsArray);
// Agregar valor al final en la copia del array.
copyOfTheFruitsArray = [...fruits, 'Pineapple'];
console.log("Array after adding 'Pineapple':", copyOfTheFruitsArray);

// Eliminar el último valor del array.
const arrayWithTheLastElementRemoved = fruits.pop();
console.log(`Last item removed: ${arrayWithTheLastElementRemoved}`);
console.log('Array after removing last element:', fruits);

// Eliminar el primer valor del array.
const arrayWithFirstElementRemoved = fruits.shift();
console.log(`First item removed: ${arrayWithFirstElementRemoved}`);
console.log('Array after removing first element:', fruits);

// Encontrar el índice de un elemento en el array.
const indexFound = fruits.indexOf('Banana');
console.log(`Item: ${indexFound}`);

// Eliminar un elemento en una posición específica.
const deletedItem = fruits.indexOf('Grape');
fruits.splice(deletedItem, 1);
console.log("Array after removing 'grape':", fruits);

// Crear un nuevo array con elementos filtrados.
const filteredItems = fruits.filter(fruit => fruit !== 'Banana');
console.log('New filtered array:', filteredItems);

// Desestructuración en arrays.
const [apple, banana] = fruits;
console.log(apple); // "Apple"
console.log(banana); // "Banana"