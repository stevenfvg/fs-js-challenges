// Función declarativa.
function add(x, y) {
    return x + y;
}

// Función expresiva.
const subtract = function (x, y) {
    return x - y;
};

// Parámetros y argumentos.
function greet(name, greetings = 'Hello') {
    console.log(`${name}, ${greetings}!`);
}

greet('Juan'); // Hola, Juan!
greet('María', 'Greetings!'); // Greetings, Maria!

// Comunicación entre funciones.
function square(number) {
    return number * number;
}

function doubleSquare(number) {
    const squareNumber = square(number);
    return squareNumber * 2;
}

const result = doubleSquare(5);
console.log(result); // 50

// Funciones en un objeto.
const calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
    multiply: (x, y) => x * y,
    split: (x, y) => x / y,
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(2, 6)); // 12
console.log(calculator.split(8, 2)); // 4

// Funciones de flecha y funciones anónimas.
const squareArrow = x => x * x;
const addArrow = (x, y) => {
    const result = x + y;
    return result;
};

console.log(squareArrow(3)); // 9
console.log(addArrow(4, 7)); // 11

// Ejemplo de un reproductor de música.
const player = {
    play: id => console.log(`playing song ${id}`),
    pause: () => console.log('Pausing...'),
    delete: id => console.log(`Deleting song ${id}`),
    createPlayList: playlistName => console.log(`Creating playlist ${playlistName}`),
    playSongList: playSongList =>
        console.log(`Playing ${playSongList}`),
};

player.play(30); // Reproduciendo canción 30.
player.pause(); // Pausando...
player.delete(30); // Eliminando canción 30.
player.createPlayList('Heavy Metal'); // Creando lista de reproducción Heavy Metal.
player.playSongList('Heavy Metal'); // Reproduciendo Heavy Metal.