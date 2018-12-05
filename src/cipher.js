window.cipher = {
  // ... 
   encode:function (offset, string){
    let msg = '';
    for (let i = 0; i < string.length; i++) {
      if (string.fromCharCode(i) >= 65 || string.fromCharCode(i) <= 90) {
        const codigo = (string[i].charCodeAt(0) - 65 + offset) % 26 + 65
        const letra_cif = String.fromCharCode(codigo)
        msg = msg + letra_cif;
      }
      else {
        msg = msg + " ";
      }
    return msg;
   }
  },

   decode:function (offset, string){
    let msg_decifrar = '';
    for (let i = 0; i < string.length; i++) {
      const codigo = (string[i].charCodeAt(0) + 65 - offset) % 26 + 65
      if (codigo < 65) {
        codigo = codigo + 26;
      }
      let letra_des = String.fromCharCode(codigo);
      msg_decifrar = msg_decifrar + letra_des;
    }
    return msg_decifrar;
   }
  }