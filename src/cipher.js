window.cipher = {
  // ... 
  encode: function(offset, string) {
    console.log(offset, string)

    let msg = '';
    for (let i = 0; i < string.length; i++) {
      // const letrita = string[index];
      const codigo = (string[i].charCodeAt(0) - 65 + offset) % 26 + 65
      const letra_cif = String.fromCharCode(codigo)
      msg = msg + letra_cif;
      // console.log(letra_cif);
    }
    return msg;
    // msg = ''
    // nombre = 'laika'
    // for(var i = 0; i < nombre.length; i++){
    //   msg = msg + nombre[i];
    // }
    // console.log(msg)
  },

  decode: function(offset, string) {
    let msg_descifrar = '';
    for(let i = 0; i < String.length; i++){
      const codigo = (string[index].charCodeAt(0) - 65 - offset) % 26 + 65
      alert("");
    }
    console.log(string)
  }

}

//offset = 2;
//string = 'LAILAZ';

//console.log(cipher.encode(offset, string));
