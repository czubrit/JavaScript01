import {Evento} from "./event.js";

let contacto = document.getElementById("contacto");
let galeria = document.getElementById("galeria");

//Cargar galeria
let html = "";
fetch('https://picsum.photos/v2/list')
.then(response => response.json())
.then(data=>{
  data.forEach(element => {
    html += "<h4> Autor: " + element.author + "</h4><img src=\"" + element.download_url + "\" width=\"220px\"><br />";
    //console.log(html);
  });
  document.getElementById("fotos").innerHTML = html;
  //console.log(data);
})
.catch(error => console.log(error))

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