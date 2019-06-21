class Galeria {
  constructor(url) {
    this.url = url;
    this.html = "";
  }
  get_galeria() {
    this.html = fetch(this.url)
    .then(response => response.json())
    .then(data=>{
      data.forEach(element => {
        this.html += "<h4> Autor: " + element.author + "</h4><img src=\"" + element.download_url + "\" width=\"220px\"><br />";
      });
      return this.html;
    })
    .catch(error => console.log(error));
    return this.html;
  }
}

export {Galeria};