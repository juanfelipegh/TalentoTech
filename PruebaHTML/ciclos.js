function ciclos(event) {
    event.preventDefault();
    for (let i = 0; i < 5; i++) {
        alert("numero" + i);
        console.log(i);

    }
}

function ciclow(event) {
    event.preventDefault();
    let menu = 0;
    while (menu != 3) {
        let menu = prompt("Menu \n 1.Suma \ 2.Resta \n 3.Salir");
        if (menu == 1) {
            alert("Suma");

        }
        if (menu == 2) {
            alert("Resta");

        } else if (menu == 3) {
            alert("Gracias por usarnos");
            break;
        } else {
            alert("Opcion incorrecta");

        }
    }
}

function ciclodo(event) {
    event.preventDefault();
    do {
        let i = 2;
        let n = i * 2;
        alert("2 x" + i + " = " + n)
        i++
    } while (i <= 10);
}

/*Ejercicio 1*/
function sumaNumeros(event) {
    let numero = parseInt(prompt("Ingresa un número:"));
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }
    alert("La suma de todos los números hasta " + numero + " es: " + suma);
}
/*Ejercicio 2*/
function imprimirNumeros(event) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ";
    }
    alert("Números del 1 al 10: " + resultado);
}

/*Ejercicio 4*/
function contargente(event) {
    event.preventDefault();
    let cantidadPersonas = parseInt(prompt("¿Cuántas personas quieres evaluar?"));
    let mayoresDeEdad = 0; for (let i = 0; i < cantidadPersonas; i++) {
        let edad = parseInt(prompt("Ingresa la edad de la persona " + (i + 1) + ":"));
        if (edad >= 18) { mayoresDeEdad++; }
    }
    alert("Cantidad de personas mayores de 18 años: " + mayoresDeEdad);
}

/*Ejercicio 7*/
function impares(event) {
    event.preventDefault();
    let resultado = ""; let contador = 0;
    let numero = 1; while (contador < 5) {
        if (numero % 2 !== 0) {
            resultado += numero + " "; contador++;
        } numero++;
    }
    alert("Los primeros 5 números impares son: " + resultado);
}



/*Ejercicio 8*/
function tablas(event) {
    event.preventDefault();
    let numero = parseInt(prompt("Ingresa un número:"));
    let limite = parseInt(prompt("Ingresa el límite:"));
    let resultado = "Tabla de multiplicar del " + numero + " hasta " + limite + ":\n";
    for (let i = 1; i <= limite; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
}

