  // Ejercicio 2
 
/* const modificar = document.getElementById("modificar");
const cambiar = document.getElementById("change");
const cambiar2 = document.getElementsByClassName('change2');



cambiar.addEventListener('click',()=>{
    modificar.textContent = "Texto modificado";
})
cambiar2.addEventListener('click',()=>{
    modificar.textContent = "Modificar el Texto";
}) */


    //Ejercicio 2

/* const color1 = document.getElementsByClassName("color");
const boton = document.getElementById("change");
boton.addEventListener('click', () => {
    for (let i = 0; i < color1.length; i++) {
        color1[i].style.color= "yellow";

    }

}) */

    //Ejercicio 3

const a = document.getElementById("contenedor")
const b = document.getElementById("change")   

b.addEventListener('click',()=>{
a.innerHTML=`<h2>Departamento de Colombia</h2>
<p>Otra cosa</p>`

})