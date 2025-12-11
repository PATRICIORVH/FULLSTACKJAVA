// número secreto entre 1 y 10
const secreto = Math.floor(Math.random() * 10) + 1;

let intentosRestantes = 3;
const usados = [];
let terminado = false;

// función para saber si un número ya fue usado
function yaUsado(numero, lista) {
  return lista.includes(numero);
}

while (intentosRestantes > 0 && !terminado) {
  const entrada = prompt("Ingresa un número entre 1 y 10:");
  const n = parseInt(entrada, 10);

  // validar rango
  if (Number.isNaN(n) || n < 1 || n > 10) {
    alert("Número fuera de rango. Debe ser entre 1 y 10.");
    continue; // no gasta intento
  }

  // validar repetido
  if (yaUsado(n, usados)) {
    alert("Número repetido. Intenta con otro.");
    continue; // tampoco gasta intento
  }

  // si es válido y nuevo, lo guardamos
  usados.push(n);

  // actualizar historial en la página
  const historialDiv = document.getElementById("historial");
  historialDiv.innerHTML = "Intentos: " + usados.join(", ");

  // comparar con el secreto
  if (n === secreto) {
    alert("¡Adivinaste!");
    terminado = true;
  } else {
    intentosRestantes--;
    if (intentosRestantes > 0) {
      alert("No acertaste. Te quedan " + intentosRestantes + " intento(s).");
    }
  }
}

// si terminó sin aciertos
if (!terminado) {
  alert("Sin aciertos. El número era: " + secreto);
}