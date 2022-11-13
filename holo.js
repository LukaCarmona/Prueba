function quitarNO() {
  var texto = document.getElementById('texto').textContent;

  var NuevoTexto = texto.replace(/\b[Nn][Oo]\b/g, '');
  const p = document.querySelector('p');
  p.textContent = NuevoTexto;
  //output: "code.tutsplus.com"
}

function contarPalabras() {
  const inputBusqueda = document.querySelector('#palabraE');
  const original = document.querySelector('#texto').innerText;
  const palabra = inputBusqueda.value.toLowerCase();

  if (palabra.length === 0) return;
  const rg = new RegExp(`\\b${palabra}\\b`, 'g');
  const textoOcurrencias = document.querySelector('#ocurrencias');
  textoOcurrencias.innerText = (original.toLowerCase().match(rg) || []).length;
}
