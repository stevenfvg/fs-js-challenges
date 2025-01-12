import Swal from 'sweetalert2';

// Función para procesar los elementos del DOM y añadirles funcionalidad.
export function getElementsFromDom(elements) {
    // Desestructuración de los elementos recibidos como parámetros en variables individuales.
    const [
        spinner, // Contenedor del spinner (carga o progreso).
        productImage, // Imagen del producto.
        selectedQuantity, // Input para ingresar la cantidad del producto.
        selectedColor, // Select para seleccionar el color del producto.
        priceOfTheProduct, // Precio del producto.
        btnCalculateTotal, // Botón para calcular el total.
        totalAmount, // Monto total calculado.
        totalQuantity, // Cantidad total seleccionada.
        productColor, // Elemento con clase "rounded-circle" para mostrar el color seleccionado del producto.
    ] = elements;

    // Obtención del precio del producto desde el texto del elemento.
    const price = priceOfTheProduct.innerText || priceOfTheProduct.textContent;
    // Conversión del precio en un número eliminando símbolos como $ y comas.
    const rawPrice = Number(price.replace(/[\$,]/g, ''));

    // Inicialización del monto total con un valor de 0 con formato moneda.
    const startingAmount = 0;
    totalAmount.innerHTML = `${startingAmount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    })}`;

    // Inicialización de la cantidad total con un valor de 0 .
    const startingQuantity = 0;
    totalQuantity.innerHTML = `${startingQuantity}`;

    // Función para cargar los event listeners en los elementos interactivos.
    const loadEventListeners = () => {
        // Evento que oculta el spinner y muestra la imagen cuando se carga.
        productImage.addEventListener('load', () => {
            spinner.classList.add('d-none'); // Oculta el spinner.
            productImage.classList.remove('d-none'); // Muestra la imagen.
        });
        // Eventos para manejar la entrada del usuario en el campo de cantidad.
        selectedQuantity.addEventListener('input', handleInputQuantity);
        selectedQuantity.addEventListener('keydown', handleKeydownQuantity);
        // Evento para calcular el total al hacer clic en el botón.
        btnCalculateTotal.addEventListener('click', calculateTheTotal);
    };

    // Función para manejar la entrada en el campo de cantidad.
    const handleInputQuantity = event => {
        let quantityValue = event.target.value;

        // Se valida que la cantidad ingresada por el usuario sea un número del 1 al 9.
        if (!/^[1-9]$/.test(quantityValue)) {
            // Si la cantidad supera el límite permitido, se muestra una advertencia.
            if (quantityValue >= 10) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'warning',
                    text: 'La cantidad excede el stock disponible.',
                    showConfirmButton: false,
                    timer: 2000,
                });
                // Se resetea el valor del input cantidad.
                quantityValue = '';
            }
        }
        // Se actualiza el campo con el valor validado.
        event.target.value = quantityValue;
    };

    // Función para manejar teclas presionadas en el campo de cantidad.
    const handleKeydownQuantity = event => {
        // Permitir ciertas teclas como "Backspace" y teclas de flecha.
        const controlKeys = ['Backspace', 'ArrowUp', 'ArrowDown'];

        if (controlKeys.includes(event.key)) {
            return; // Permitir que el evento continúe.
        }

        // Condición para evitar la entrada de cualquier otra tecla que no sea un número del 1 al 9.
        if (!/^[1-9]$/.test(event.key)) {
            event.preventDefault();
        }
    };

    // Función para calcular el total basado en la cantidad y el color seleccionados.
    const calculateTheTotal = event => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario.
        
        // Obtención de la cantidad y el color seleccionado.
        const quantity = parseInt(selectedQuantity.value);
        const color = selectedColor.value;

        // Se valida que la cantidad no está definida o es inválida.
        if (selectedQuantity.value === '' || selectedQuantity.value === NaN) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'warning',
                text: 'Introduzca la cantidad de producto.',
                showConfirmButton: false,
                timer: 2000,
            });
            return; // Se detiene la ejecución de la función.
        }

        // Se valida si el color no ha sido seleccionado.
        if (
            selectedColor.value === '' ||
            selectedColor.value === 'color' ||
            selectedColor.value === 'Color'
        ) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'warning',
                text: 'Seleccione el color del producto.',
                showConfirmButton: false,
                timer: 2000,
            });
            return; 
        } else {
            // Se calcula el total multiplicando la cantidad por el precio.
            const total = quantity * rawPrice;

            // Se muestra el total y la cantidad en los respectivos contenedores.
            totalAmount.innerHTML = `${total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
            })}`;
            totalQuantity.innerHTML = `${quantity}`;

            // Se actualiza el color del producto visualmente.
            productColor.classList.remove('bg-secondary');
            productColor.style.backgroundColor = color;
        }
    };

    // Invocación a la función para cargar todos los event listeners.
    loadEventListeners();
}
