// Eliminar elemento del DOM (Ejemplo).

// Selecciona el primer elemento que tenga la clase 'container' en el documento HTML.
const element = document.querySelector('.container');

// Elimina el tercer elemento hijo del elemento seleccionado previamente.
element.removeChild(element.children[2]);
