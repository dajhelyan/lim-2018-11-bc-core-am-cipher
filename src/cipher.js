window.cipher = {
  // ... 
   encode:function (offset, string){
    let msg = '';    
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        const cifrar = (string[i].charCodeAt(0) - 65 + offset) % 26 + 65;
        let letra_cif = String.fromCharCode(cifrar);
        msg = msg + letra_cif;
      }
      else if(string.charCodeAt(i) === 32){
        const cifrar = 32;
        let letra_cif = String.fromCharCode(cifrar);
        msg = msg + letra_cif;
      }
    }
   return msg;
  },

   decode:function (offset, string){
    let msg_decifrar = '';
    for (let i = 0; i < string.length; i++) {
      const decifrar = (string[i].charCodeAt(0) + 65 - offset) % 26 + 65;
      let letra_des = String.fromCharCode(decifrar);
      msg_decifrar = msg_decifrar + letra_des;
    }
    return msg_decifrar;
   }
  }