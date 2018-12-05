const button_cifrado = document.getElementById('cifrar');
const button_decifrado = document.getElementById('decifrar');
const input = document.getElementById('mensaje');
const resultado = document.getElementById('resultado');
const button_comenzar = document.getElementById('comenzar');
const cifrado = document.getElementById('cifrado');
const bienvenida = document.getElementById('bienvenida');
const button_volver = document.getElementById('volver');

const click_button_comenzar = () => {
  cifrado.classList.add("mostrar");
  cifrado.classList.remove("ocultar");
  bienvenida.classList.add("ocultar");
  bienvenida.classList.remove("mostrar");
}

const click_button_volver = () => {
  cifrado.classList.add("ocultar");
  cifrado.classList.remove("mostrar");
  bienvenida.classList.add("mostrar");
  bienvenida.classList.remove("ocultar");
}


const click_button_cifrado = () => {
  const offset = parseInt(document.getElementById('offset').value);
  const msg = input.value;
  const mensaje_cifrado = cipher.encode(offset, msg);
  resultado.innerHTML = mensaje_cifrado;
}


const click_button_decifrado = () => {
  const offset = parseInt(document.getElementById('offset').value);
  const msg_decifrado = input.value;

  const mensaje_decifrado = cipher.decode(offset, msg_decifrado);
  resultado.innerHTML = mensaje_decifrado;
}

button_cifrado.addEventListener('click', click_button_cifrado);
button_decifrado.addEventListener('click', click_button_decifrado);
button_comenzar.addEventListener('click', click_button_comenzar);
button_volver.addEventListener('click', click_button_volver);
