export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {numer} minutos 
     * @param {string} periodo AM o PM
     */
    constructor (hora, minutos, periodo) {
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo;
    }
    getFormato12() {
        return `${this.hora}: ${this.minutos} ${this.periodo}`;
    }
    getFormato24 () {
        if (this.periodo == "PM") {
            this.hora = this.hora + 12
        }
        return `${this.hora}: ${this.minutos}`;
    }   
}
let tiempo1 = new Tiempo(9, 40, "PM")
console.log(tiempo1.getFormato12());
console.log(tiempo1.getFormato24());