import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";
export default class Cita {
    /**
     * 
     * @param {Fecha} fecha Fecha de la cita
     * @param {Tiempo} hora Hora de la cita
     * @param {Doctor} doctor 
     * @param {Paciente} paciente 
     */
    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }
    getCita(){
        return `${this.fecha}, ${this.hora}, ${this.doctor}, ${this.nombre}`;
    }
}