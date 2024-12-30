// Ejemplo de cómo usar las variables let y const y su alcance.
function scopeExample() {
    // Usando let para una variable con alcance dentro de la función.
    let x = 10;
    console.log('Initial value of x:', x); // Salida: Valor inicial de x dentro de la función = 10.

    if (true) {
        // Usando const para una variable con alcance de bloque.
        const y = 20;
        console.log('Value of y:', y); // Salida: Valor inicial de y dentro del bloque if = 20.

        // Reasignando valor a la variable let dentro del bloque.
        x = 30;
        console.log('Updated value of x:', x); // Salida: Valor actualizado de x dentro del bloque if = 30.

        // Reasignando la variable const dentro del bloque (resultará en un error).
        // y = 40; // Error: Asignación a una variable constante.
    }

    console.log('Final value of x:', x); // Salida: Valor final de x fuera del bloque if = 30.
}

scopeExample();