// Función auxiliar para pedir una nota válida
function pedirNota(numeroNota) {
  let valor;
  do {
    let entrada = prompt("Ingrese la nota " + numeroNota + " (entre 1.0 y 7.0)");
    valor = parseFloat(entrada);

    // Si no es número o está fuera de rango, avisamos
    if (isNaN(valor) || valor < 1.0 || valor > 7.0) {
      alert("Valor inválido. Debe ser un número entre 1.0 y 7.0.");
    }
  } while (isNaN(valor) || valor < 1.0 || valor > 7.0);

  return valor;
}

// 1. Pedimos 3 notas válidas
let nota1 = pedirNota(1);
let nota2 = pedirNota(2);
let nota3 = pedirNota(3);

// 2. Calculamos el promedio
let promedio = (nota1 + nota2 + nota3) / 3;
let mensaje = "";

// 3. Condiciones según el promedio
if (promedio >= 6.0) {
  mensaje = "¡Excelente! Tienes promedio " + promedio.toFixed(2);
} else if (promedio >= 5.0 && promedio < 6.0) {
  mensaje = "Tienes promedio " + promedio.toFixed(2) + ". ¡Sigue adelante, puedes mejorar!";
} else if (promedio >= 4.0 && promedio < 5.0) {
  mensaje = "Tienes promedio " + promedio.toFixed(2) + ". Debes esforzarte más";
} else {
  mensaje = "Has reprobado con promedio " + promedio.toFixed(2);
}

// 4. Mostrar en las tres salidas
document.write(mensaje);
window.alert(mensaje);
console.log(mensaje);
