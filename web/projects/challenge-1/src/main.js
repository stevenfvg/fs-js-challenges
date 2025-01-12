// Importación de los estilos predefinidos de Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';
// Importación de los Scripts de Bootstrap para utilizar componentes interactivos como modales y tooltips.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importación de los componentes Card e Infor del producto.
import Card from './components/productCard.js';
import Info from './components/infoContainer.js';

// Importación de la función getElementsFromDom() para obtener elementos del DOM.
import { getElementsFromDom } from './app';

// Esperamos a que el contenido del DOM esté completamente cargado antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {
    // Elemento principal de la aplicación donde renderizaremos los componentes.
    const app = document.querySelector('#app');
    // Estructura HTML dentro del elemento principal:
    app.innerHTML = `
		<div class="container-fluid vh-100 py-4 d-flex align-items-center justify-content-center">
            <div class="row w-100">
                <div class="col-sm-12 col-md-7 d-flex justify-content-center justify-content-md-end mb-3 mb-md-0">
                    ${Card()}
                </div>
                <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                    ${Info()}
                </div>
            </div>
        </div>
    `;

    // Array con los elementos que queremos obtener del DOM.
    const elements = [
        document.querySelector('#spinner-container'), // Contenedor del spinner (carga o progreso).
        document.querySelector('#product-image'), // Imagen del producto.
        document.querySelector('#selected-quantity'), // Input para ingresar la cantidad del producto.
        document.querySelector('#selected-color'), // Select para seleccionar el color del producto.
        document.querySelector('#price'), // Precio del producto.
        document.querySelector('#calculate-total'), // Botón para calcular el total.
        document.querySelector('#total-amount'), // Monto total calculado.
        document.querySelector('#quantity'), // Cantidad total seleccionada.
        document.querySelector('.rounded-circle'), // Elemento con clase "rounded-circle" para mostrar el color seleccionado del producto.
    ];

    // Invocación de la función getElementsFromDom() para procesar los elementos seleccionados.
    getElementsFromDom(elements);
});
