// Ejemplos de objetos y sus métodos.
// Un objeto agrupa todo en una sola variable.

// Creación de un objeto de tipo (literal de objeto).
const person = {
    name: 'Steven',
    age: 30,
    city: 'Caracas',
};

// Acceder a los valores del objeto.
console.log(person.name); // "Steven"
console.log(person.age); // 30
console.log(person.city); // "Caracas"

// Agregar una nueva propiedad al objeto.
person.job = 'Developer';
console.log(person.job); // "Developer"

// Eliminar una propiedad del objeto.
delete person.city;
console.log(person.city); // undefined

// Desestructuración de objetos.
const { name, age } = person;
console.log(name); // "Steven"
console.log(age); // 30

// Objetos dentro de objetos.
const car = {
    brand: 'Toyota',
    model: 'Camry',
};

const owner = {
    name: 'Ana',
    vehicle: car,
};

console.log(owner.vehicle.brand); // "Toyota"

// Desestructuración de objetos anidados.
const {
    name: ownerName,
    vehicle: { brand: carBrand },
} = owner;
console.log(ownerName); // "Ana"
console.log(carBrand); // "Toyota"

// Congelar un objeto (no se pueden agregar, eliminar o modificar propiedades).
Object.freeze(person);
person.salary = 50000; // Esto no tendrá ningún efecto.
console.log(person.salary); // undefined
// Comprobar si el objeto está congelado.
console.log(Object.isFrozen(person)); // true

// Sellado de un objeto (las propiedades existentes se pueden modificar, pero no se pueden agregar o eliminar).
Object.seal(car);
car.model = 'Corolla'; // Esto funcionará.
car.color = 'Azul'; // Esto no tendrá ningún efecto.
// Comprobar si el objeto está sellado.
console.log(Object.isSealed(car)); // true

// Funciones en objetos.
const calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

// Objeto constructor.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const newPerson = new Person('María', 25);
console.log(newPerson.name); // "María"
console.log(newPerson.age); // 25

// Object.keys, Object.values y Object.entries.
const fruit = {
    apple: 'red',
    banana: 'yellow',
    grape: 'purple',
};

const keys = Object.keys(fruit);
const values = Object.values(fruit);
const entries = Object.entries(fruit);

console.log(keys); // ["apple", "banana", "grape"]
console.log(values); // ["red", "yellow", "purple"]
console.log(entries); // [["apple", "red"], ["banana", "yellow"], ["grape", "purple"]]

// Unir objetos con Object.assign.
const product = {
    description: '20 inch monitor',
    price: 300,
    stock: true,
};

const diameter = {
    weight: '1kg',
    extent: '1m',
};

const productWithDescription = Object.assign(product, diameter);
console.log(productWithDescription);

// Unir objetos con el operador Spread o el operador Rest.
const productDescription = { ...product, ...diameter };
console.log(productDescription);