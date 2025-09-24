document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault()
  const nombre = document.getElementById('nombre').value
  const sueldo = parseFloat(document.getElementById('sueldo').value)
  const meses = parseInt(document.getElementById('meses').value)
  const años = Math.floor(meses / 12)
  const resto = meses % 12
  let aguinaldo = años * 2000
  if (aguinaldo > 10000) aguinaldo = 10000
  aguinaldo += resto * 100
  const total = sueldo + aguinaldo
  document.getElementById('resultado').innerHTML = `
    <div class="alert alert-success">
      ${nombre}<br>
      Aguinaldo: $${aguinaldo}<br>
      Total a pagar: $${total}
    </div>`
})