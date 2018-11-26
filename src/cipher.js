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

  },

  decode: function(offset, string) {
    let msg_decifrar = '';
    for(let i = 0; i < string.length; i++){
      const codigo = (string[i].charCodeAt(0) + 65 - offset) % 26 + 65
      if (codigo < 65 ){
        codigo = codigo + 26;
      } 
      let letra_des = String.fromCharCode(codigo);
      msg_decifrar = msg_decifrar + letra_des;
    }
    return msg_decifrar
    console.log(string)
  }

}

//offset = 2;
//string = 'LAILAZ';

//console.log(cipher.encode(offset, string));
