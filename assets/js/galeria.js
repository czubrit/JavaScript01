class Galeria {
  constructor(url) {
    this.url = url;
    this.html = "";
  }
  get_galeria() {
    fetch(this.url)
    .then(response => response.json())
    .then(data=>{
      data.forEach(element => {
        this.html += "<h4> Autor: " + element.author + "</h4><img src=\"" + element.download_url + "\" width=\"220px\"><br />";
        document.getElementById("fotos").innerHTML = this.html;
      });
    })
    .catch(error => console.log(error));
  }
}

export {Galeria};