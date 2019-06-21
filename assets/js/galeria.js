class Galeria {
  constructor(url) {
    this.url = url;
    this.html = "";
  }

  set_galeria() {
    fetch(this.url)
    .then(response => response.json())
    .then(data=>{
      data.forEach(element => {
        this.html += "<h4> Autor: " + element.author + "</h4><img src=\"" + element.download_url + "\" width=\"220px\"><br />";
      });
    })
    .catch(error => console.log(error))
  }

  get_galeria() {
    return this.html;
  }
}

export {Galeria};