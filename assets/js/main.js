import {Evento} from "./event.js";

//TODO: Imprimir en la consola los valores que se obtienen del formulario.

const mostrar = function (event) {
  event.preventDefault();
  let alerta = new Evento (document.forms);
  alerta.enviarAlerta();
}

document.addEventListener("submit", mostrar, false);
