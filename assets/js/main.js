import {Evento} from "./event.js";

const alerta = new Evento ("Evento detenido por el usuario");

const mostrar = function (event) {
  event.preventDefault();
  alerta.enviarAlerta()
}

document.addEventListener("submit", mostrar, false);
