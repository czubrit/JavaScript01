class Menu {
  constructor(vista) {
    this.contacto = document.getElementById("contacto");
    this.galeria = document.getElementById("galeria");
    this.vista = vista;
  }
  cambiarVista() {
    if (this.vista['id'] === 'to-contacto') {
      this.galeria.style.display = "none";
      this.contacto.style.display = "block";
    }
    else {
      this.contacto.style.display = "none";
      this.galeria.style.display = "block";
    }
  }
}

export {Menu};