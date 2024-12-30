// Ejemplo: Modificación de texto según el navegador.

// Obtiene el agente de usuario del navegador actual.
const browser = navigator.userAgent;
let keyboardShortcut = document.querySelector('.container p span');

// Verifica si el navegador es Chrome y establece un atajo de teclado correspondiente.
if (browser.includes('Chrome')) {
    // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Chrome.
    keyboardShortcut.textContent = 'Ctrl+Shift+J';
}

// Verifica si el navegador es Firefox y establece un atajo de teclado correspondiente.
if (browser.includes('Firefox')) {
    // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Firefox.
    keyboardShortcut.textContent = 'Ctrl+Shift+K';
}

// Verifica si el navegador es Safari y establece un atajo de teclado correspondiente.
if (browser.includes('Safari') && !browser.includes('Chrome')) {
    // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Safari.
    keyboardShortcut.textContent = 'Cmd+Opt+C';
}

// Verifica si el navegador es Edge y establece un atajo de teclado correspondiente.
if (browser.includes('Edg')) {
    // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Edge.
    keyboardShortcut.textContent = 'Ctrl+Shift+J';
}

// Verifica si el navegador es Internet Explorer y establece un atajo de teclado correspondiente.
if (browser.includes('MSIE') || browser.includes('Trident/')) {
    // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Internet Explorer.
    keyboardShortcut.textContent = 'Ctrl+`';
}
