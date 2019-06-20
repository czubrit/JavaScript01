class Evento {
    constructor(forms) {
        this.longitud;
        this.form;
        this.forms = forms;
    }
    enviarAlerta() {
        this.longitud = this.forms[0].length - 1;
        this.form = this.forms[0];
        for (let i = 0; i < this.longitud; i++) {
            console.log(this.form[i]["name"] + " : " + this.form[i]["value"]);
        }
        //console.log (this.form);
    }
}

export {Evento};