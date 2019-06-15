import {Evento} from "./event.js";

const alerta = new Evento ("Evento detenido por el usuario");

const mostrar = function () {
  alerta.enviarAlerta()
}

document.addEventListener("submit", mostrar);
