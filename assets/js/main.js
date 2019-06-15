import {Evento} from "./event.js";

//TODO: Imprimir en la consola los valores que se obtienen del formulario.

const mostrar = function (event) {
  event.preventDefault();
  const alerta = new Evento ("Evento detenido por el usuario");
  alerta.enviarAlerta()
}

document.addEventListener("submit", mostrar, false);
