function revision() {

    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let subsidio = ""

    if (edad < 18) {
        subsidio = "Tienes un 100% de Subsidio"
    } else if (edad >= 18 && edad < 30) {
        subsidio = "Tienes un 65% de Subsidio"
    } else {
        subsidio = "Tienes un 30% de Subsidio"
    }

    let salida = `Tu Nombre: ${nombre}. Edad: ${edad}. Subsidio: ${subsidio}.`;
    /* No es necesario encapsular la salida en una variable, se hace directo*/
    document.getElementById("salida").textContent = salida;

}

