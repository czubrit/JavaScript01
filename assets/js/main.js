import {Evento} from "./evento.js";
import {Galeria} from "./galeria.js";
import {Menu} from "./menu.js";

let galeria = new Galeria('https://picsum.photos/v2/list');
let menu = new Menu();
let html;

galeria.set_galeria();
html = galeria.get_galeria();
document.getElementById("fotos").innerHTML = html;



let contacto = document.getElementById("contacto");
let galeria = document.getElementById("galeria");


const mostrar = function (event) {
  event.preventDefault();
  let alerta = new Evento (document.forms);
  alerta.enviarAlerta();
}

const navegar_contacto = function (event) {
  event.preventDefault();  
  galeria.style.display = "none";
  contacto.style.display = "block";
}

const navegar_galeria = function (event)  {
  event.preventDefault();
  contacto.style.display = "none";
  galeria.style.display = "block";
}


document.addEventListener("submit", mostrar, false);
document.getElementById("to-contacto").addEventListener("click", navegar_contacto, false);
document.getElementById("to-galeria").addEventListener("click", navegar_galeria, false);