// Función que se ejecuta cuando todo el HTML ha sido cargado en el DOM.
document.addEventListener('DOMContentLoaded', () => {
    // Evento del mouse.
    const mouseButton = document.getElementById('mouseButton');
    mouseButton.addEventListener('click', () => {
        alert('You clicked the mouse');
    });

    // Evento de entrada.
    const textArea = document.getElementsByTagName('textarea')[0];
    textArea.addEventListener('input', () => {
        console.log('Text: ', textArea.value);
    });

    // Evento de envío en un formulario.
    const formSubmit = document.getElementById('formSubmit');
    formSubmit.addEventListener('submit', event => {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario.

        const inputName = document.querySelector(
            '#formSubmit input[type="text"]'
        );
        const validator = inputName.nextElementSibling; // Seleccionar el div invalid-feedback junto a la entrada.
        let inputValue = inputName.value.trim(); // Obtiene el valor de la entrada y elimina los espacios en blanco iniciales y finales.

        if (inputValue === '') {
            inputName.classList.add('is-invalid');
            validator.textContent = 'Please enter your name.'; // Establecer mensaje de error personalizado.
            return; // Detener la ejecución si el campo está vacío.
        } else if (inputValue.indexOf(' ') !== -1) {
            inputName.classList.add('is-invalid');
            validator.textContent = 'Enter only one name (no spaces).';
            return; // Detener la ejecución si el campo contiene espacios.
        } else {
            inputValue =
                inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
            inputName.value = inputValue; // Actualizar el valor de entrada con el nombre capitalizado.
            inputName.classList.remove('is-invalid');
            validator.classList.remove('invalid-feedback');
            inputName.classList.add('is-valid');
            validator.classList.add('valid-feedback');
            validator.textContent = 'Submitted form'; // Borrar el mensaje de error personalizado.
            console.log(`Name entered: ${inputValue}`);
        }

        if (!formSubmit.checkValidity()) {
            event.stopPropagation(); // Detener la propagación si el formulario no es válido.
        }

        formSubmit.classList.add('was-validated'); // Agregar la clase was-validated al formulario después de la validación.
    });

    // Evento al desplazarse con el ratón.
    const boxWithDisplacement = document.getElementById('scrollDiv');
    boxWithDisplacement.addEventListener('scroll', () => {
        console.log('');
    });

    // Burbuja de eventos.
    const outerButton = document.getElementById('outerButton');
    const innerButton = document.getElementById('innerButton');
    const eventBubbling = document.getElementById('eventBubbling');

    outerButton.addEventListener('click', () => {
        console.log('Exterior clicked');
    });

    innerButton.addEventListener('click', event => {
        event.stopPropagation(); // Prevenir el burbujeo.
        console.log('Inside clicked');
    });

    eventBubbling.addEventListener('click', () => {
        console.log('Container div clicked');
    });
});
