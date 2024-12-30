// Ejemplos usando Traversing The DOM.

// Obtener el primer elemento hijo usando firstElementChild.
const firstElementChild = document.body.firstElementChild;
console.log('First child element:');
console.log(firstElementChild);

// Obtener el último elemento hijo usando lastElementChild.
const lastElementChild = document.body.lastElementChild;
console.log('Last child element:');
console.log(lastElementChild);

// Obtener todos los nodos hijos usando childNodes.
const childNodes = document.body.childNodes;
console.log('Child nodes:');
console.log(childNodes);

// Obtener todos los elementos hijos usando children.
const elementsChildren = document.body.children;
console.log('Child elements:');
console.log(elementsChildren);

// Obtener el tipo de nodo del primer hijo usando nodeType.
const firstChildType = document.body.firstElementChild.nodeType;
console.log('First child node type:');
console.log(firstChildType);

// Obtener el siguiente elemento hermano utilizando nextElementSibling.
const nextElementSibling = document.head.nextElementSibling;
console.log('Next sibling element:');
console.log(nextElementSibling);
