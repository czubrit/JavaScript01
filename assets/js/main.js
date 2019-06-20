import {Evento} from "./event.js";

const mostrar = function (event) {
  event.preventDefault();
  let alerta = new Evento (document.forms);
  alerta.enviarAlerta();
}

function navegar(event){
  event.preventDefault();
  let contacto = document.getElementById("contacto");
  contacto.style.display = "block";
}


document.addEventListener("submit", mostrar, false);
document.getElementById("to-contacto").addEventListener("click", navegar, false);