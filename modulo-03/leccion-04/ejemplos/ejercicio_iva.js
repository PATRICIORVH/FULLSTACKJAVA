function precioFinal(monto, descuentoPorcentaje) {
  const IVA = 0.19;                 
  const precioConIVA = monto * (1 + IVA);
  const descuento = precioConIVA * (descuentoPorcentaje / 100);
  const total = precioConIVA - descuento;
  return total;
}

console.log(precioFinal(5000, 0));    // sin descuento
console.log(precioFinal(25000, 20)); // 20% de descuento
