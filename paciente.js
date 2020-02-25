import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
export default class Paciente {
    /**
     * 
     * @param {string} nombre Nombre del paciente
     * @param {Fecha} fdeNacimiento Nacimiento del paciente
     * @param {number} telefono Telefono
     */
    constructor(nombre, fdeNacimiento, telefono){
        this.nombre = nombre;
        this.fdeNacimiento = fdeNacimiento;
        this.telefono = telefono;
    }
    getPerfil(){
        return `${this.nombre}, ${this.fdeNacimiento.getFecha()}, ${this.telefono}`;
    }
}
let paciente1 = new Paciente("Braulio Pérez", new Fecha(21, 9, 2000), 31267894994);
console.log(paciente1.getPerfil());