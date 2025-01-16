//Ejercicio 1
function obtener(event) {
    event.preventDefault();
    let url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const odatos = document.getElementById( `datos`)
            data.forEach(e => {
              
                const obtener = document.createElement('tr')

                obtener.innerHTML = `<td> ${e.userId} </td>
                                     <td> ${e.Id} </td >
                                    <td>${e.tittle} </td>
                                    <td>${e.body} </td>`

                odatos.appendChild(obtener)
            });

        })
.catch(Error => {
console.error("Error al obtener los datos")
})
}
 

//Ejercicio 2
function obtenerYFiltrarUsuarios(event) {
    event.preventDefault();
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Filtrar usuarios cuyo nombre contenga "Leanne"
            const usuariosFiltrados = data.filter(usuario => usuario.name.includes("Leanne"));

            // Mostrar resultados
            const resultadoDiv = document.getElementById('resultado');
            const odatos = document.getElementById('datos2');
            odatos.innerHTML = ''; // Limpiar contenido previo

            if (usuariosFiltrados.length > 0) {
                resultadoDiv.innerHTML = `<p>Se encontraron ${usuariosFiltrados.length} usuarios:</p>`;
                usuariosFiltrados.forEach(usuario => {
                    const obtener = document.createElement('tr');
                    obtener.innerHTML = `<td>${usuario.name}</td><td>${usuario.email}</td>`;
                    odatos.appendChild(obtener);
                });
            } else {
                resultadoDiv.innerHTML = '<p>No se encontraron usuarios con el nombre "Leanne".</p>';
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos", error);
        });
}
