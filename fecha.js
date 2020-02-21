class Fecha {
    /**
     * 
     * @param {number} fecha 
     */
    constructor (fecha) {
        this.fecha = fecha;
        this.fecha2 = new Date;
    }
    getAños() {
        let años = this.fecha2.getUTCFullYear() - this.fecha.getFullYear();
        return `${años}`;
    }
    getMeses() {
        let meses = años * 12;
        return `${meses}`;
    }
    getSemanas() {
        let semanas = meses * 4;
        return `${semanas}`;
    }
    getDias() {
        let dias = semanas * 7;
        return `${dias}`;
    }
    getFecha() {
        return `${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`;
    }
    getDiaFecha() {
        return `${this.fecha.getDay()}`;
    }
}