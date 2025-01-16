const productos = [
    { id: 1, nombre: 'Zapatos', precio: 10, imagen: '/zapato.webp' },
    { id: 2, nombre: 'Carros', precio: 20, imagen: '/carro.png' },
    { id: 3, nombre: 'Aviones', precio: 30, imagen: '/avion.webp' }
  ];
  
  let carrito = [];
  
  const productosContainer = document.getElementById('productos-container');
  const carritoLista = document.getElementById('carrito-lista');
  const totalSpan = document.getElementById('total');
  
  // Función para actualizar el carrito y el total
  function actualizarCarrito() {
    carritoLista.innerHTML = ''; // Limpiar el carrito
  
    let total = 0;
    carrito.forEach((producto, index) => {
      const li = document.createElement('li');
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      const eliminarBtn = document.createElement('button');
      eliminarBtn.textContent = 'Eliminar';
      eliminarBtn.addEventListener('click', () => eliminarDelCarrito(index));
  
      li.appendChild(eliminarBtn);
      carritoLista.appendChild(li);
  
      total += producto.precio;
    });
  
    totalSpan.textContent = total;
  }
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    alert(`Producto ${producto.nombre} agregado al carrito`);
    actualizarCarrito();
  }
  
  // Función para eliminar un producto del carrito
  function eliminarDelCarrito(index) {
    const producto = carrito[index];
    carrito.splice(index, 1);
    alert(`Producto ${producto.nombre} eliminado del carrito`);
    actualizarCarrito();
  }
  
  // Añadir eventos a los botones de "Agregar al carrito"
  productosContainer.querySelectorAll('.agregar-carrito').forEach((btn, index) => {
    btn.addEventListener('click', () => agregarAlCarrito(productos[index].id));
  });
  