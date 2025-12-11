// pedir coeficientes al usuario y convertir a float
const a = parseFloat(prompt("Ingresa el coeficiente a:"));
const b = parseFloat(prompt("Ingresa el coeficiente b:"));
const c = parseFloat(prompt("Ingresa el coeficiente c:"));

// función discriminante: b^2 - 4ac
function discriminante(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

// calcular delta
const delta = discriminante(a, b, c);

// mostrar delta en la consola
console.log("Δ =", delta);

// referencia al div de salida
const resultadoDiv = document.getElementById("resultado");

if (delta > 0) {
  // dos soluciones reales
  const raizDelta = Math.sqrt(delta);
  const x1 = (-b + raizDelta) / (2 * a);
  const x2 = (-b - raizDelta) / (2 * a);

  const mensajeAlerta = "Dos soluciones:\nx1 = " + x1 + ", x2 = " + x2;
  window.alert(mensajeAlerta);

  console.log("Soluciones: x1 =", x1, ", x2 =", x2);

  resultadoDiv.innerHTML =
    "Ecuación: " + a + "x² + (" + b + ")x + " + c + " = 0<br>" +
    "Δ = " + delta + " → Dos soluciones reales<br>" +
    "x1 = " + x1 + "<br>" +
    "x2 = " + x2;

} else if (delta === 0) {
  // una sola solución real
  const x = -b / (2 * a);

  window.alert("Una solución:\nx = " + x);

  console.log("Δ = 0");
  console.log("Solución única: x =", x);

  resultadoDiv.innerHTML =
    "Ecuación: " + a + "x² + " + b + "x + " + c + " = 0<br>" +
    "Δ = 0 → Solución única<br>" +
    "x = " + x;

} else {
  // sin soluciones reales
  window.alert("No existen soluciones reales");

  console.log("Δ =", delta);
  console.log("Sin soluciones reales");

  resultadoDiv.innerHTML =
    "Ecuación: " + a + "x² + " + b + "x + " + c + " = 0<br>" +
    "Δ = " + delta + " → Sin soluciones reales";
}
