import {Evento} from "./evento.js";
import {Galeria} from "./galeria.js";
import {Menu} from "./menu.js";

let photos = new Galeria('https://picsum.photos/v2/list');
photos.get_galeria();

const mostrar = function (event) {
  event.preventDefault();
  let alerta = new Evento (document.forms);
  alerta.enviarAlerta();
}

const navegar = function (event)  {
  event.preventDefault();
  let menu = new Menu(this);
  menu.cambiarVista();
}

document.addEventListener("submit", mostrar, false);
document.getElementById("to-contacto").addEventListener("click", navegar, false);
document.getElementById("to-galeria").addEventListener("click", navegar, false);