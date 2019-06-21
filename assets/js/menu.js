class Menu {
  constructor(galeria, contacto) {
    this.galeria = galeria;
    this.contacto = contacto;
  }
  
  enviarAlerta() {
    this.longitud = this.forms[0].length - 1;
    this.form = this.forms[0];
    for (let i = 0; i < this.longitud; i++) {
      console.log(this.form[i]["name"] + " : " + this.form[i]["value"]);
    }
  }
}

export {Menu};