// Mostrar/ocultar el botón según el scroll
window.addEventListener('scroll', function() {
  const btn = document.getElementById('btn-ir-arriba');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Scroll suave al ir arriba
document.getElementById('btn-ir-arriba').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
