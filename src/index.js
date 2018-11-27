const button_cifrado = document.getElementById('cifrar');
const button_decifrado = document.getElementById('decifrar')
const input = document.getElementById('mensaje');
const resultado = document.getElementById('resultado');
const button_comenzar = document.getElementById('comenzar')
const cifrado = document.getElementById('cifrado')
const bienvenida = docuement.getElementById('bienvenida')

const click_button_comenzar = function(){
  cifrado.classList.add("mostrar");
  cifrado.classList.remove("ocultar");
  //bienvenida.classList.add("ocultar");
  //bienvenida.classList.remove("mostrar");
}


const click_button_cifrado = function(){
  console.log('hiciste click en cifrar');
  const offset = parseInt(document.getElementById('offset').value);
  const msg = input.value;

 const mensaje_cifrado = cipher.encode(offset, msg);
 resultado.innerHTML = mensaje_cifrado;
}


const click_button_decifrado = function(){
  console.log('hiciste click en decifrar');
  const offset = parseInt(document.getElementById('offset').value)
  const msg_decifrado = input.value;

  const mensaje_decifrado = cipher.decode(offset, msg_decifrado);
  resultado.innerHTML = mensaje_decifrado;
}

button_cifrado.addEventListener('click', click_button_cifrado);
button_decifrado.addEventListener('click', click_button_decifrado);
button_comenzar.addEventListener('click', click_button_comenzar);