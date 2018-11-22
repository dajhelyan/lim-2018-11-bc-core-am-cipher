const button_cifrado = document.getElementById('cifrar');
const input = document.getElementById('mensaje');
const resultado = document.getElementById('resultado');

const click_button_cifrado = function(){
  console.log('hiciste click en cifrar');
  const offset = parseInt(document.getElementById('offset').value);
  const msg = input.value;

 const mensaje_cifrado = cipher.encode(offset, msg);
 //mensaje_descrifado = cipher.encode(offset, msg_descrifado)
 resultado.innerHTML = mensaje_cifrado;
}

button_cifrado.addEventListener('click', click_button_cifrado)
