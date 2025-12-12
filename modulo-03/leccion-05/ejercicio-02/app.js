// Lista donde se guardarán los pacientes
const pacientes = [];

// 1. Preguntar cantidad de pacientes
let cantidadPacientes = prompt("¿Cuántos pacientes se atenderán hoy?");
cantidadPacientes = parseInt(cantidadPacientes, 10);

if (isNaN(cantidadPacientes) || cantidadPacientes <= 0) {
  console.log("La cantidad de pacientes no es válida.");
} else {
  // 2. Ingresar datos de cada paciente
  for (let i = 0; i < cantidadPacientes; i++) {
    const nombreIngresado = prompt(`Nombre del paciente ${i + 1}:`);
    const edadIngresada = prompt(`Edad del paciente ${i + 1} (años):`);
    const pesoIngresado = prompt(`Peso del paciente ${i + 1} (kg, usa punto decimal):`);
    const sexoIngresado = prompt(`Sexo del paciente ${i + 1} (M/F):`);

    const paciente = {
      nombre: nombreIngresado,
      edad: parseInt(edadIngresada, 10),
      peso: parseFloat(pesoIngresado),
      sexo: sexoIngresado
    };

    pacientes.push(paciente);
  }

  // 3. Función para calcular promedio de peso
  function promedioPeso(listaPacientes) {
    if (!listaPacientes.length) {
      return 0;
    }

    let suma = 0;
    for (const p of listaPacientes) {
      suma += p.peso;
    }
    return suma / listaPacientes.length;
  }

  // 4. Calcular y mostrar resultados
  const prom = promedioPeso(pacientes);

  console.log(`Promedio de peso (${pacientes.length} pacientes): ${prom.toFixed(2)} kg`);
  console.log("Detalle de pesos:");
  for (const p of pacientes) {
    console.log(`${p.nombre}: ${p.peso} kg`);
  }

  const divResultado = document.getElementById("resultado");
  if (divResultado) {
    divResultado.innerHTML = `Promedio de peso: ${prom.toFixed(2)} kg`;
  }
}
