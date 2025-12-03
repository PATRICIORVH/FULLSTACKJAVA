// Pedir diámetro y calcular área
const diametro = Number(prompt("Ingresa el diámetro (cm):"));
const radio = diametro / 2;
const area = Math.PI * Math.pow(radio, 2);

// Consola
console.log("Área: " + area.toFixed(2) + " cm²");

// Alerta
window.alert("Área: " + area.toFixed(2) + " cm²");

// Página (DOM)
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "Área: " + area.toFixed(2) + " cm²";