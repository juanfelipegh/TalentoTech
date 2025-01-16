const div = document.getElementById('midiv');

const boton = document.getElementById('cambiar');

let con = 1;
boton.addEventListener('click', ()=>{

 if(con == 1){
    div.textContent = "Se modifica el contenido";
    div.style.color = "red";
    con =2;
    } else if(con == 2){
        div.textContent = "Curso de programacion";
    div.style.color = "black";
    con =1;
    }
})
const lista1 = document.getElementsByClassName('lista');

const boton = document.getElementById('cambiar');

boton.addEventListener('click',()=>{
    /*lista1[2].textContent = "Sapo";
    lista1[2].style.color = "blue";*/

    for(let i =0; i<lista1.length; i++){
        lista1[i].style.color = "orange";
    }
})
const selector = document.querySelector('#midiv');
const selector1 = document.querySelector('.lista');
const selector2 = document.querySelector('p');

const boton = document.getElementById('cambiar');

boton.addEventListener('click',()=>{
    selector.style.color = "blue";
    
    selector1.style.fontSize = "30px";
    selector2.style.backgroundColor = "red";
})
const selector = document.querySelector('#midiv');
const selector1 = document.querySelector('.lista');
const selector2 = document.querySelector('p');

const boton = document.getElementById('cambiar');

boton.addEventListener('click',()=>{
    selector.style.color = "blue";
    
    selector1.style.fontSize = "30px";
    selector2.style.backgroundColor = "red";
})
const crear = document.getElementById('listaPadre');

const boton = document.getElementById('cambiar');

boton.addEventListener('click', ()=>{
    const crearItem = document.createElement('li');
    crearItem.textContent = "Gallina";
    crear.appendChild(crearItem);

    const notificacion = document.createElement('div');

    notificacion.textContent = "Elemento agragado con exito"; 

    notificacion.style.position = "fixed";
    notificacion.style.backgroundColor = "red";
    notificacion.st

    
    const imagen = document.getElementById('imagenes');

document.addEventListener('keydown', (evento)=>{
    if(evento.key === 'd'){
        imagen.setAttribute('src', 'allstaroja.jpg');
    }else if(evento.key === 'f'){
        imagen.setAttribute('src', 'allstarnegra.jpg');
    }
})