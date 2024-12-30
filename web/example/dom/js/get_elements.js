/* DOM (Document Object Model): 
    El DOM es una representación en forma de árbol de un documento HTML o XML. 
    Cuando un navegador web carga una página web, crea una representación del contenido de la página como objetos que se pueden manipular con JavaScript. 
    Cada elemento HTML se convierte en un objeto en el DOM, organizado en una jerarquía que refleja la estructura del documento. 
    Esto permite a JavaScript acceder, modificar y manipular dinámicamente elementos y contenido en una página web. */

// Obtiene todo el objeto Document en la consola.
console.log(document);
// Obtiene el dominio del documento actual.
console.log(`Domain: ${document.domain}`);
// Obtiene el número total de elementos HTML en el Documento.
console.log(`Elements: ${document.all.length}`);

// Obtiene todo el objeto <head> del Documento en la consola.
console.log(document.head);
// Obtiene el número de elementos <meta> dentro de <head>.
console.log(`Metadata: ${document.head.querySelectorAll('meta').length}`);
// Obtiene el número de elementos <link> dentro de <head>.
console.log(`Links: ${document.head.querySelectorAll('link').length}`);
// Obtiene el número total de elementos hijos dentro de <head>.
console.log(`Child elements: ${document.head.childElementCount}`);

// Obtiene todo el objeto <body> del Documento en la consola.
console.log(document.body);

/* querySelectorAll: Este también es un método del objeto Document, pero en lugar de devolver solo un elemento, devuelve una colección (NodeList) de todos los elementos que coinciden con un selector CSS dado. 
Puedes usarlo para seleccionar múltiples elementos e iterar sobre ellos. Por ejemplo: 

const elements = document.querySelectorAll('.element-class');
elements.forEach(element => {
  // Haz algo con cada elemento.
});

En resumen, el DOM es la representación estructurada del contenido de un documento HTML o XML en forma de un árbol de objetos.
querySelector y querySelectorAll son métodos que te permiten seleccionar elementos específicos en el DOM utilizando selectores CSS, ya sea para seleccionar un solo elemento o varios a la vez. 
Estas funciones son esenciales para manipular y trabajar dinámicamente con el contenido web utilizando JavaScript. */

// Obtiene el número total de elementos con un atributo "class" en el Documento.
console.log(`Classes: ${document.querySelectorAll('[class]').length}`);
// Obtiene el número total de elementos con un atributo "id" en el Documento.
console.log(`Identifiers: ${document.querySelectorAll('[id]').length}`);

/* querySelector: Este es un método que pertenece al objeto Document en JavaScript. Te permite seleccionar y devolver el primer elemento que coincide con un selector CSS especificado. 
El selector CSS es una cadena que sigue las mismas reglas que las utilizadas en las hojas de estilo CSS. Por ejemplo, si tienes un elemento con el id "my-element", puedes seleccionarlo de la siguiente manera:

const element = document.querySelector('#my-element');

Esto devuelve el primer elemento con el id "my-element" en el DOM. */

// Obtiene el número de atributos de la clase ".container" (asumiendo que existe).
console.log(
    `Containers: ${document.querySelector('.container').attributes.length}`
);
// Obtiene el número total de elementos <div> dentro de <body>.
console.log(`Divisions: ${document.body.querySelectorAll('div').length}`);
// Obtiene el número total de elementos <a> (enlace) dentro de <body>.
console.log(`Links: ${document.links.length}`);
// Obtiene el número total de elementos <img> dentro de <body>.
console.log(`Images: ${document.images.length}`);
// Obtiene el número total de elementos <form> dentro de <body>.
console.log(`Forms: ${document.forms.length}`);

// Obtiene el elemento del documento por ID.
console.log(`Title: ${document.getElementById('title').textContent}`);
// Obtiene el elemento del documento por nombre de clase CSS.
console.log(`Icons: ${document.getElementsByClassName('icon-link').length}`);
