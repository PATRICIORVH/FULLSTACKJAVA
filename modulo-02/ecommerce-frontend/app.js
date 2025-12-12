// Catálogo y carrito
const catalogo = [
  { id: 1, nombre: "Zapatilla Runner 1", precio: 25990, descuentoAplicado: false },
  { id: 2, nombre: "Zapatilla Runner 2", precio: 29990, descuentoAplicado: false },
  { id: 3, nombre: "Zapatilla Runner 3", precio: 27990, descuentoAplicado: false },
  { id: 4, nombre: "Zapatilla Runner 4", precio: 28990, descuentoAplicado: false },
];

let carrito = [];

let codigoDescuentoActivo = "";  // <-- agrega esta línea aquí

const PASSWORD_MAESTRA = "1234";
let usuarioLogueado = false;

// Carrito
function agregarProducto(idProducto) {
  const prod = catalogo.find(p => p.id === idProducto);
  if (prod) carrito.push({ ...prod });
  renderizarCarrito();
}

function quitarProducto(idProducto) {
  const idx = carrito.findIndex(p => p.id === idProducto);
  if (idx >= 0) carrito.splice(idx, 1);
  renderizarCarrito();
}

function aplicarCodigoDescuento() {
  const input = document.getElementById("codigoDescuento");
  const codigo = input.value.trim();
  codigoDescuentoActivo = codigo;   // guardamos el código que escribió el usuario
  renderizarCarrito();              // recalculamos y repintamos el carrito
}

function aplicarDescuento(codigo) {
  if (codigo === "DESC15") {
    carrito.forEach(p => p.descuentoAplicado = true);
    return 0.85; // factor 15% off
  }
  return 1; // sin descuento
}

function calcularTotal(codigo) {
  const factor = aplicarDescuento(codigo);
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  return Math.round(total * factor);
}

function renderizarCarrito() {
  const tbody = document.getElementById("tbodyCarrito");
  const totalElemento = document.getElementById("totalCarrito");
  const spanCantidad = document.getElementById("cantidadItems");

  if (!tbody || !totalElemento || !spanCantidad) {
    console.warn("Elementos del carrito no encontrados en el DOM");
    return;
  }

  if (carrito.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" class="text-center">Carrito vacío</td>
      </tr>
    `;
  } else {
    tbody.innerHTML = carrito
      .map(
        (p) => `
        <tr>
          <td>${p.nombre}</td>
          <td>$${p.precio}</td>
          <td>
            <button class="btn btn-sm btn-danger" onclick="quitarProducto(${p.id})">
              Quitar
            </button>
          </td>
        </tr>
      `
      )
      .join("");
  }

  const total = calcularTotal(codigoDescuentoActivo || "");  // luego usaremos el código del input
  totalElemento.textContent = `$ ${total}`;
  spanCantidad.textContent = carrito.length;

  console.log("Carrito:", carrito);
}

// Autenticación
function mostrarModal(tipo) {
  const modalElement = document.getElementById("modalAuth");
  const titulo = document.getElementById("modalAuthTitle");

  if (!modalElement || !titulo) {
    console.warn("Modal de auth no encontrado en el DOM");
    return;
  }

  if (tipo === "registro") {
    titulo.textContent = "Registro";
  } else {
    titulo.textContent = "Iniciar sesión";
  }

  document.getElementById("usuarioInput").value = "";
  document.getElementById("passwordInput").value = "";

  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}

function iniciarSesion(usuario, password) {
  if (password === PASSWORD_MAESTRA) {
    usuarioLogueado = true;
    console.log("Usuario logueado:", usuario);

    // Actualizar texto en la navbar
    const estado = document.getElementById("estadoUsuario");
    if (estado) {
      estado.textContent = "Usuario logueado";
      estado.classList.add("text-success");
    }

    // Cerrar el modal
    const modalElement = document.getElementById("modalAuth");
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }

    alert("Sesión iniciada correctamente");
  } else {
    console.warn("Credenciales inválidas");
    alert("Contraseña incorrecta");
  }
}

function handleSubmitAuth() {
  const usuarioInput = document.getElementById("usuarioInput");
  const passwordInput = document.getElementById("passwordInput");

  const usuario = usuarioInput ? usuarioInput.value.trim() : "";
  const password = passwordInput ? passwordInput.value : "";

  iniciarSesion(usuario, password);
}
