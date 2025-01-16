// Ejercicio 1: Determina si una persona es elegible para votar
function puedeVotar(event) {
    event.preventDefault();
    let edad = prompt("ingrese su Edad");
    if (edad >= 18) {
        alert("Usted es apto para votar");
    } else {
        alert("Usted no es apto para votar");
    }
}
// Ejercicio 2: Determina si una persona puede conducir
function licencia(event) {
    event.preventDefault();
    let edad = prompt("ingrese su Edad");
    if (edad >= 18) {
        alert("Usted puede conducir");
    } else {
        alert("Usted no es apto para conducir");
    }
}

// Ejercicio 3: Determina si un número es par o impar
function paroimpar(event) {
    event.preventDefault();
    let numero = prompt("Ingrese un número");
    if (numero % 2 == 0) {
        alert("El numero que usted digito es Par");
    } else {
        alert("El numero que usted digito es Impar");
    }
}

// Ejercicio 4: Indica si una persona es mayor o menor de edad
function mayorOMenorDeEdad(event) {
    event.preventDefault();
    let edad = prompt("ingrese su Edad");
    if (edad >= 18) {
        alert("Usted es mayor de edad");
    } else {
        alert("Usted no es mayor de edad");
    }
}

// Ejercicio 5: Determina si un estudiante aprobó una asignatura
function pasaono(event) {
    event.preventDefault();
    let Nota = prompt("ingrese su Nota");
    if (Nota >= 6) {
        alert("Usted Aprobo la Asignatura");
    } else {
        alert("Usted no aprobo la asignatura");
    }
}

// Ejercicio 6: Determina si un número es positivo, negativo o cero
function pone0(event) {
    event.preventDefault();
    let numero = prompt("Ingrese le numero a evaluar");
    if (numero > 0) {
        alert("su numero es Positivo");
    } else if (numero < 0) {
        alert("Su nummero es Negativo");
    } else {
        alert("Su numero es Cero");
    }
}

// Ejercicio 7: Determina si una persona tiene derecho a un descuento
function descuento(event) {
    event.preventDefault();
    let edad = prompt("Ingrese su edad");
    if (edad < 18 || edad > 65) {
        alert("Tienes un descuento");
    } else {
        alert("Lo lamentamos, no tienes descuento");
    }
}

// Ejercicio 8: Determina la estación del año según el mes
function temporadas(event) {
    event.preventDefault();
    let mes = prompt("Ingrese el numero del mes que desea evaluar")

    if (mes <= 2 || mes == 12) {
        alert("Este mes esta en Invierno");
    } else if (mes >= 3 && mes <= 5) {
        alert("Este mes esta en Primavera");
    } else if (mes >= 6 && mes <= 8) {
        alert("Este mes esta en Verano");
    } else if (mes >= 9 && mes <= 11) {
        alert("Este mes esta en Otoño");
    } else {
        alert("El numero del mes es invalido, recuerde escribir un numero del 1 al 12");
    }
}

// Ejercicio 9: Verifica si una persona tiene una invitación a una fiesta
function invitacion(event) {
    event.preventDefault();
    if (confirm("Tienes ivitacion?")) {
        alert("Estas invitado, puedes entrar");
    }
    else {
        alert("No Puedes entrar, no tienes invitación");
    }

}

// Ejercicio 10: Determina si un año es bisiesto
function bisio(event) {
    event.preventDefault();
    let ano = prompt("Escriba el año que desea saber si fue Bisiesto o no")
    if (ano % 4 == 0 && (ano % 100 !== 0 || ano % 400 == 0)) {
        alert("El año " + ano + " fue bisiesto")
    } else {
        alert("El año " + ano + " no fue bisiesto")
    }
}


// Ejercicio 11: Indica si una persona puede comprar alcohol
function cerveza(event) {
    event.preventDefault();
    let edad = prompt("ingrese su Edad");
    if (edad >= 18) {
        alert("Usted puede comprar alcohol");
    } else {
        alert("Usted no puede comprar alcohol");
    }
}


// Ejercicio 12: Determina si una persona es un adulto joven, adulto o persona mayor
function edad(event) {
    event.preventDefault();
    let edad = prompt("Ingresa tu edad");
    switch (true) {
        case (edad >= 18 && edad <= 35):
            alert("Eres un Adulto joven");
            break;
        case (edad >= 36 && edad <= 64):
            alert("Eres un Adulto");
            break;
        case (edad >= 65):
            alert("Eres una persona Mayor");
            break;
        default:
            alert("Eres un Menor de edad");
    }
}


