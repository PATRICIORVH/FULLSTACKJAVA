// 1. Creamos un array vacío para guardar los números
let numeros = [];

// 2. Pedimos 3 números al usuario y los guardamos en el array
for (let i = 1; i <= 3; i++) {
  let valor = parseFloat(prompt("Ingrese el número " + i));
  numeros.push(valor);
}

// 3. Ordenamiento burbuja con do-while
let cambiado;
do {
  cambiado = false;

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      // Intercambiamos los valores
      let aux = numeros[i];
      numeros[i] = numeros[i + 1];
      numeros[i + 1] = aux;
      cambiado = true;
    }
  }
} while (cambiado);

// 4. Obtenemos el menor y el mayor
let menor = numeros[0];
let mayor = numeros[numeros.length - 1];

// 5. Mostramos el resultado
if (menor === mayor) {
  document.write("Los tres números ingresados son idénticos: " + menor);
} else {
  document.write(
    "El menor número es: " + menor + "<br>" +
    "El mayor número es: " + mayor
  );
}