// Ejemplos de métodos de cadenas y cadenas de plantilla.

// Define una cadena de texto.
const exampleString = 'Hello World!';
console.log(`- String: ${exampleString}`);

// length: obtener la longitud de la cadena.
const stringLength = exampleString.length;
console.log(`- Length: ${stringLength}`);

// indexOf: encontrar la posición de una subcadena en la cadena.
const substringPosition = exampleString.indexOf('World');
console.log(`- The word "World" begins in the position: ${substringPosition}`);

// includes: verificar si una subcadena está presente en la cadena.
const checkSubstring = exampleString.includes('Hello');
console.log(`- Does the string contain the word "Hello"?: ${checkSubstring}`);

// concat: concatenar cadenas.
const otherString = ' what a beautiful day!';
const concatenatedString = exampleString.concat(otherString);
console.log(concatenatedString);

// trimStart, trimEnd y trim: Eliminar espacios en blanco al principio, al final o en ambos extremos.
const stringWithSpaces = '   Spaces   ';

const noSpacesAtStart = stringWithSpaces.trimStart();
const noSpacesAtTheEnd = stringWithSpaces.trimEnd();
const noSpacesAtBothEnds = stringWithSpaces.trim();

console.log(`- No spaces at the beginning: "${noSpacesAtStart}"`);
console.log(`- No spaces at the end: "${noSpacesAtTheEnd}"`);
console.log(`- No spaces at both ends: "${noSpacesAtBothEnds}"`);

// replace: Reemplazar una subcadena por otra.
const replacedString = exampleString.replace('World', 'friends');
console.log(replacedString);

// slice: obtener una porción de una cadena.
const substring = exampleString.slice(2, 6);
console.log(`- Substring: "${substring}"`);

// substring: obtener una subcadena desde índices.
const substring2 = exampleString.substring(2, 6);
console.log(`- Substring (substring): "${substring2}"`);

// charAt: obtener el carácter en una posición específica.
const character = exampleString.charAt(5);
console.log(`- Character in position 5: "${character}"`);

// repeat: repetir una cadena un cierto número de veces.
const repeatedString = 'Hello '.repeat(3);
console.log(`- String repeated 3 times: "${repeatedString}"`);

// split: dividir una cadena en un arreglo de subcadenas.
const words = exampleString.split(' ');
console.log(`- Words separated by spaces: ${JSON.stringify(words)}`);

// toUpperCase: convertir a mayúsculas.
const uppercaseString = exampleString.toUpperCase();
console.log(`- Uppercase string: "${uppercaseString}"`);

// toLowerCase: convertir a minúsculas.
const lowercaseString = exampleString.toLowerCase();
console.log(`- Lowercase string: "${lowercaseString}"`);

// toString: convertir a cadena (aunque ya es una cadena).
const stringConvertedToString = exampleString.toString();
console.log(`- String converted to string: "${stringConvertedToString}"`);

// Cadena de plantilla o TemplateStrings.
const name = 'Steven';
age = 30;
message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);