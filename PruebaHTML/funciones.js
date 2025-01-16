// Ejercicio #1
function calculadora(event) {
    event.preventDefault();

    const sumar = (num1, num2) => num1 + num2;
    const restar = (num1, num2) => num1 - num2;
    const multiplicar = (num1, num2) => num1 * num2;
    const dividir = (num1, num2) => num1 / num2;

    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el primer dos"));
    let opera = prompt("Que operacion desea hacer? \. 1.Suma \. 2.Resta \. 3.Multiplicar \. 4.Dividir");

    let resultado;
    switch (opera) {
        case '1': resultado = sumar(num1, num2);
            alert("La suma de " + num1 + " + " + num2 + " es " + resultado);
            break;
        case '2': resultado = restar(num1, num2);
        alert("La resta de " + num1 + " - " + num2 + " es " + resultado);
            break;
        case '3': resultado = multiplicar(num1, num2);
        alert("La multiplicacion de " + num1 + " x " + num2 + " es " + resultado);
            break;
        case '4':
            if (num2 == 0) {
                alert("No Existe la Division por 0");
            } else {
                resultado = dividir(num1, num2);
                alert("La division de " + num1 + " / " + num2 + " es " + resultado);
            }
            break;
        default: console.error("Operador no válido");
            return;
    } 
    
    console.log(`Resultado: ${resultado}`);

}

//Ejercicio #2

function contar(event) {
    event.preventDefault();
    const n = parseInt(prompt("Ingresa un número:"));
    let suma = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }
    alert("La suma de los numeros pares hasta " + n + " es: " + suma);
    console.log(`La suma de los números pares hasta ${n} es: ${suma}`);
}

//Ejercicio #3

function primo(event) {
    event.preventDefault();
    const num = parseInt(prompt("Ingresa un número:"));
    if (num < 2) {
        alert(num+" no es un numero Primo");
        console.log(`${num} no es un número primo`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            alert(num+" no es un numero Primo");
            console.log(`${num} no es un número primo`);
            return;
        }
    }
    alert(num+" es un numero Primo");
    console.log(`${num} es un número primo`);
} 

//Ejercicio #4

function max(event) {
    event.preventDefault();
    const arreglo = prompt("Ingresa una lista de números separados por comas:").split(',').map(Number);
    const maximo = Math.max(...arreglo);
    alert("El numero ma sgrande del arreglo es "+maximo)
    console.log(`El número más grande en el arreglo es: ${maximo}`);
}

//Ejercicio #5

function verificar(event) {
    event.preventDefault();
    const arreglo = prompt("Ingresa una lista de números separados por comas:").split(',').map(Number);
    const numero = parseInt(prompt("Ingresa el número a verificar:"));

    if (arreglo.includes(numero)) {
        alert(numero+" esta en el arreglo");
        console.log(`${numero} está en el arreglo`);
    } else {
        alert(numero+" no esta en el arreglo");
        console.log(`${numero} no está en el arreglo`);
    }
}





