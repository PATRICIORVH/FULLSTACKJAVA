// Paso 1: preguntar cuántas palabras quiere ingresar la persona
const cantidadTexto = prompt("¿Cuántas palabras deseas ingresar?");
const cantidad = parseInt(cantidadTexto);

// Paso 2: crear un arreglo vacío para guardar las palabras
const palabras = [];

// Paso 3: pedir cada palabra y guardarla en el arreglo
for (let i = 1; i <= cantidad; i++) {
  const palabra = prompt("Ingresa la palabra #" + i + ":");
  palabras.push(palabra);
}
// Paso 4: definir la función expresiva para contar vocales en una palabra
const VOCALES = ["a", "e", "i", "o", "u"];

const contarVocales = function (palabra) {
  let total = 0;

  for (const ch of palabra.toLowerCase()) {
    if (VOCALES.includes(ch)) {
      total++;
    }
  }

  return total;
};
// Paso 5: unir todas las palabras en un solo texto
const textoUnido = palabras.join("");

// Paso 6: usar la función para contar las vocales del texto completo
const totalVocales = contarVocales(textoUnido);
// Paso 7: mostrar el resultado en consola
console.log("Total de vocales:", totalVocales);

// Paso 8: mostrar el resultado en una alerta
window.alert("¡Listo! Se encontraron " + totalVocales + " vocales en total.");

// Paso 9: insertar el resultado en la página HTML
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "Vocales totales: " + totalVocales;
