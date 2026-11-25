// Carrito de la compra de FitShop.
// Se guarda en localStorage para que se mantenga al cambiar de página (la web es estática, sin backend).
// Lo usan las páginas de producto, novedades, carrito y pago. Se carga después de js/productos.js.

const CLAVE_CARRITO = 'carritoFitshop';
const UNIDADES_MAXIMAS = 10;      // máximo de unidades de un mismo producto por pedido
const ENVIO_GRATIS_DESDE = 50;    // a partir de este subtotal, el envío estándar es gratis
const ENVIO_ESTANDAR = 4.9;       // coste del envío estándar por debajo de ese importe
const ENVIO_EXPRES = 8;           // coste del envío exprés (siempre)

const formatoEuros = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });

function formatearEuros(importe) {
  return formatoEuros.format(importe);
}

// Escapa el texto antes de meterlo en HTML para que nunca se ejecute como código
function escaparHtml(texto) {
  return String(texto ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// Lee las líneas del carrito. Si el dato guardado está roto, empieza con un carrito vacío.
function obtenerCarrito() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE_CARRITO));
    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    return [];
  }
}

function guardarCarrito(lineas) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(lineas));
  actualizarContadorCarrito();
}

// Añade un producto o un pack. Si ya estaba en el carrito, suma unidades sin pasar del límite.
function agregarAlCarrito(producto, cantidad = 1) {
  const lineas = obtenerCarrito();
  const existente = lineas.find(l => l.id === producto.id);

  if (existente) {
    existente.cantidad = Math.min(UNIDADES_MAXIMAS, existente.cantidad + cantidad);
  } else {
    const esPack = Array.isArray(producto.incluye);
    lineas.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      imagen: producto.imagen,
      detalle: producto.detalle || (esPack ? producto.incluye.join(' · ') : ''),
      enlace: esPack ? `detalle-novedad.html?id=${producto.id}` : `producto.html?id=${producto.id}`,
      cantidad: Math.min(UNIDADES_MAXIMAS, cantidad)
    });
  }
  guardarCarrito(lineas);
}

// Cambia las unidades de una línea. Con 0 o menos, la línea se quita.
function cambiarCantidad(id, cantidad) {
  const lineas = obtenerCarrito()
    .map(l => (l.id === id ? { ...l, cantidad: Math.min(UNIDADES_MAXIMAS, cantidad) } : l))
    .filter(l => l.cantidad > 0);
  guardarCarrito(lineas);
}

function quitarDelCarrito(id) {
  guardarCarrito(obtenerCarrito().filter(l => l.id !== id));
}

function vaciarCarrito() {
  guardarCarrito([]);
}

function totalArticulos() {
  return obtenerCarrito().reduce((suma, l) => suma + l.cantidad, 0);
}

// Subtotal en euros con dos decimales (sin errores de coma flotante)
function subtotalCarrito() {
  const suma = obtenerCarrito().reduce((acumulado, l) => acumulado + l.precio * l.cantidad, 0);
  return Math.round(suma * 100) / 100;
}

// Coste de envío según el tipo elegido: exprés siempre 8 €; estándar gratis desde 50 €.
function costeEnvio(subtotal, tipo) {
  if (tipo === 'expres') return ENVIO_EXPRES;
  return subtotal >= ENVIO_GRATIS_DESDE ? 0 : ENVIO_ESTANDAR;
}

// Actualiza el contador del menú en todas las páginas (elementos con data-contador-carrito)
function actualizarContadorCarrito() {
  const unidades = totalArticulos();
  document.querySelectorAll('[data-contador-carrito]').forEach(el => {
    el.textContent = unidades;
    el.classList.toggle('d-none', unidades === 0);
  });
}

// Muestra un aviso breve de Bootstrap (toast) con enlace al carrito
function notificar(mensaje) {
  if (!window.bootstrap) return;

  let contenedor = document.querySelector('#contenedor-avisos');
  if (!contenedor) {
    contenedor = document.createElement('div');
    contenedor.id = 'contenedor-avisos';
    contenedor.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(contenedor);
  }

  const aviso = document.createElement('div');
  aviso.className = 'toast align-items-center text-bg-dark border-0';
  aviso.setAttribute('role', 'status');
  aviso.setAttribute('aria-live', 'polite');
  aviso.setAttribute('aria-atomic', 'true');
  aviso.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${escaparHtml(mensaje)} <a href="carrito.html" class="link-light fw-bold">Ver carrito</a></div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
    </div>`;
  contenedor.appendChild(aviso);

  aviso.addEventListener('hidden.bs.toast', () => aviso.remove());
  new bootstrap.Toast(aviso, { delay: 3500 }).show();
}

actualizarContadorCarrito();
