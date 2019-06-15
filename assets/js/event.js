export class Evento {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
    enviarAlerta() {
        alert(this.mensaje);
    }
}