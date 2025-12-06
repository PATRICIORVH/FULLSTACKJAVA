// Pedir cantidad de alumnos
let cantidadAlumnos = parseFloat(
  prompt("Ingrese la cantidad de alumnos del curso")
);

// Variable acumuladora para los promedios
let notasCurso = 0;

// Repetir para cada alumno
for (let i = 1; i <= cantidadAlumnos; i++) {
  let n1 = parseFloat(
    prompt("Alumno " + i + " - Ingrese Nota 1 (25%)")
  );
  let n2 = parseFloat(
    prompt("Alumno " + i + " - Ingrese Nota 2 (35%)")
  );
  let n3 = parseFloat(
    prompt("Alumno " + i + " - Ingrese Nota 3 (40%)")
  );

  // Promedio ponderado del alumno
  let promedioAlumno = n1 * 0.25 + n2 * 0.35 + n3 * 0.40;

  // Acumular en notasCurso
  notasCurso += promedioAlumno;
}

// Promedio final del curso
let promedioCurso = notasCurso / cantidadAlumnos;

// Mostrar resultado en pantalla
document.write(
  "El promedio final ponderado del curso es: " +
  promedioCurso.toFixed(2)
);
