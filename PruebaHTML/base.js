
// 1. Crear un Inventario
let inventario = [
    { nombre: "Televisor 4K", codigo: "TV001", cantidad: 10, precio: 300 },
    { nombre: "Auriculares Bluetooth", codigo: "AU002", cantidad: 2, precio: 50 },
    { nombre: "Smartphone", codigo: "SP003", cantidad: 0, precio: 500 },
    { nombre: "Laptop", codigo: "LP004", cantidad: 15, precio: 800 }
];

// 2. Verificar Stock
function verificarStock(event) {
    inventario.forEach(producto => {
        if (producto.cantidad == 0) {
            console.log(`${producto.nombre} (${producto.codigo}) (${producto.cantidad}): Producto agotado`);
        } else if (producto.cantidad <= 5) {
            console.log(`${producto.nombre} (${producto.codigo}) (${producto.cantidad}): Próximo a agotarse`);
        } else {
            console.log(`${producto.nombre} (${producto.codigo}) (${producto.cantidad}): En stock`);
        }
    });
}

// 3. Actualizar Stock
function actualizarStock(event) {
    event.preventDefault();
    let codigo = prompt("Ingrese el codigo del Producto a registrar");
    let nuevaCantidad = parseInt(prompt("Ingrese la cantidad del producto"));
    let producto = inventario.find(prod => prod.codigo == codigo);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        console.log(`Cantidad actualizada: ${producto.nombre} (${producto.codigo}) - ${producto.cantidad} unidades`);
    } else {
        console.log("Error: Producto no encontrado");
    }
    
}

// 4. Agregar Nuevo Producto
function agregarProducto(event) {
    event.preventDefault();
    let nombre = prompt("nombre del producto");
    let codigo = prompt("Codigo del producto");
    let cantidad = parseInt(prompt("Ingrese la cantidad"));
    let precio = parseInt(prompt("Ingrese el precio sin puntos ni comas"));
    let nuevoProducto = { nombre, codigo, cantidad, precio };
    inventario.push(nuevoProducto);
    console.log(`Producto agregado: ${nuevoProducto.nombre} (${nuevoProducto.codigo})`);
}

// 5. Eliminar Producto
function eliminarProducto(event) {
    event.preventDefault();
    let codigo = prompt("Ingrese el codigo del producto que desea eliminar")
    let indice = inventario.findIndex(prod => prod.codigo == codigo);
    if (indice !== -1) {
        inventario.splice(indice, 1);
        console.log(`Producto eliminado: Código ${codigo}`);
    } else {
        console.log("Error: Producto no encontrado");
    }
}

// 6. Mostrar Inventario Completo
function mostrarInventario(event) {
    event.preventDefault();
    inventario.forEach(producto => {
        let mensaje = `${producto.nombre} (${producto.codigo}) - Cantidad: ${producto.cantidad}`;
        if (producto.cantidad > 5) {
            let valorTotal = producto.precio * producto.cantidad;
            mensaje += ` - Valor Total: $${valorTotal}`;
        }
        console.log(mensaje);
    });
}

// 7. Buscar Producto por Nombre
function buscarProductoPorNombre(event) {
    event.preventDefault();
    let nombre = prompt("Escriba el nombre del producto");
    let producto = inventario.find(prod => prod.nombre.toLowerCase() === nombre.toLowerCase());
    if (producto) {
        console.log(`${producto.nombre} (${producto.codigo}) - Cantidad: ${producto.cantidad}`);
    } else {
        console.log("Error: Producto no encontrado");
    }
}

// 8. Precio Total del Inventario
function precioTotalInventario(event) {
    event.preventDefault();
    let total = inventario.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0);
    console.log(`Valor total del inventario: $${total}`);
}

// 9. Ordenar Inventario por Precio
function ordenarPorPrecio(event) {
    event.preventDefault();
    inventario.sort((a, b) => a.precio - b.precio);
    console.log("Inventario ordenado por precio:");
    mostrarInventario();
}

// 10. Verificar si hay Productos en Stock
function hayProductosEnStock(event) {
    event.preventDefault();
    let hayStock = inventario.some(producto => producto.cantidad > 5);
    console.log(`¿Hay productos en stock? ${hayStock}`);
    return hayStock;
}

// 11. Duplicar Precio de Productos en Stock
function duplicarPrecioProductosEnStock(event) {
    event.preventDefault();
    let productosActualizados = inventario.map(producto => {
        if (producto.cantidad > 5) {
            
            return { ...producto, precio: producto.precio * 1.2 };
        }
        return producto;
    });
    console.log("Precios actualizados de productos en stock:");
    productosActualizados.forEach(prod => {
        if (prod.cantidad > 5) {
            console.log(`${prod.nombre} (${prod.codigo}) - Nuevo Precio: $${prod.precio}`);
        }
    });
}

// 12. Reemplazar Producto
function reemplazarProducto(event) {
    event.preventDefault();
    let codigoViejo = prompt("Digite el codigo que desea reemplazar");
    let indice = inventario.findIndex(prod => prod.codigo === codigoViejo);
    if (indice !== -1) {
        inventario[indice] = { nombre: "Reproductor Blu-ray", codigo: "RB006", cantidad: 10, precio: 150 };
        console.log(`Producto reemplazado: ${codigoViejo} por Reproductor Blu-ray (RB006)`);
    } else {
        console.log("Error: Producto no encontrado");
    }
}

// Prueba de las funciones

