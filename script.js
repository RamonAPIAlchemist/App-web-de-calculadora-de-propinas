function calcularPropina() {
    var total = parseFloat(document.getElementById('total').value);
    var percentage = parseFloat(document.getElementById('percentage').value);
  
    if (isNaN(total) || isNaN(percentage)) {
      document.getElementById('resultado').innerHTML = 'Por favor, ingrese números válidos.';
      return;
    }
  
    var propina = total * (percentage / 100);
    var totalConPropina = total + propina;
  
    document.getElementById('resultado').innerHTML = `
      <p>Propina: $${propina.toFixed(2)}</p>
      <p>Total con Propina: $${totalConPropina.toFixed(2)}</p>
    `;
}
