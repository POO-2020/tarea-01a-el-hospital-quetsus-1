export default class Fecha {
    /**
     * 
     * @param {number} fecha 
     */
    constructor (dia, mes, año) {
        this.fecha = new Date(año, mes-1, dia);
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        this.fecha2 = new Date;
    }
    getAños() {
        let años = this.fecha2.getUTCFullYear() - this.fecha.getFullYear();
        return `${años}`;
    }
    getMeses() {
        let meses = this.getAños() * 12;
        return `${meses}`;
    }
    getSemanas() {
        let semanas = this.getMeses() * 4;
        return `${semanas}`;
    }
    getDias() {
        let dias = this.getSemanas() * 7;
        return `${dias}`;
    }
    getFecha() {
        return `${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`;
    }
    getDiaFecha() {
        let dia = this.diaSemana[this.fecha.getDay()];
        return `${dia}`;
    }
}
let fecha1= new Fecha(7, 2, 2000)
console.log(fecha1.getAños());
console.log(fecha1.getMeses());
console.log(fecha1.getSemanas());
console.log(fecha1.getDias());
console.log(fecha1.getFecha());
console.log(fecha1.getDiaFecha());