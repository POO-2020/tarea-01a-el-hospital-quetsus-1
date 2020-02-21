class Tiempo {
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
        return `${this.hora} ${this.minutos} ${this.periodo}`;
    }
    getFormato24 () {}
}