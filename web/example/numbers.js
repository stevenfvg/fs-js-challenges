// Ejemplos de números y operaciones matemáticas.

// Número.
const x = 10;
y = 5;

// Suma.
const addition = x + y;
console.log(`The sum of ${x} and ${y} is equal to: ${addition}`);

// Resta.
const subtraction = x - y;
console.log(`Subtraction: ${subtraction}`);

// Multiplicación.
const multiplication = x * y;
console.log(`Multiplication: ${multiplication}`);

// División.
const division = x / y;
console.log(`Division: ${division}`);

// Módulo (resto de la división).
const divisionModule = x % y;
console.log(`Module: ${divisionModule}`);

// Usando el objeto Math.

// round: redondeo al entero más cercano.
const decimalNumber = 3.7;
const roundeDecimalNumber = Math.round(decimalNumber);
console.log(`Rounded number ${decimalNumber}: ${roundeDecimalNumber}`);

// ceil: redondeo hacia arriba al entero más cercano.
const numberRoundedUp = Math.ceil(decimalNumber);
console.log(`Round up: ${numberRoundedUp}`);

// floor: redondeo hacia abajo al entero más cercano.
const numberRoundedDown = Math.floor(decimalNumber);
console.log(`Rounding down: ${numberRoundedDown}`);

// sqrt: calcular la raíz cuadrada.
const squareRoot = Math.sqrt(x);
console.log(`Square root of ${x}: ${squareRoot}`);

// abs: calcular el valor absoluto.
const negativeValue = -7;
const absoluteValue = Math.abs(negativeValue);
console.log(`Absolute value of ${negativeValue}: ${absoluteValue}`);

// pow: calcular la potencia de un valor.
const base = 2;
const exponent = 3;
const pow = Math.pow(base, exponent);
console.log(`${base} raised to the ${exponent} is equal to: ${pow}`);

// min: valor mínimo entre varios números.
const minValue = Math.min(x, y, negativeValue);
console.log(`The smallest number is: ${minValue}`);

// max: valor máximo entre varios números.
const maxValue = Math.max(x, y, negativeValue);
console.log(`The largest number is: ${maxValue}`);

// random: generar un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
const randomNumber = Math.random();
console.log(`Random number between 0 and 1: ${randomNumber.toFixed(1)}`);