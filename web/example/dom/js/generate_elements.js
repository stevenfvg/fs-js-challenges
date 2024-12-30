// Crea un nuevo elemento <p> en el documento.
const hashtag = document.createElement('p');

// Establece el contenido de texto del elemento <p> creado previamente.
hashtag.textContent = '#DocumentObjectModel';

// Busca en el documento el primer elemento que tenga la clase 'container' y lo guarda en la variable 'container'.
const container = document.querySelector('.container');

// Agrega el elemento <p> creado al final del elemento 'container'.
container.appendChild(hashtag);
