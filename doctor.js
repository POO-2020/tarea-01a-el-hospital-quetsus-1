import Nombre from "./nombre.js";
export default class Doctor {
    /**
     * 
     * @param {string} nombre Nombre del doctor
     * @param {string} especialidad Especialidad del doctor
     * @param {number} teléfono Teléfono del doctor
     * @param {number} cédula Cédula profesional
     */
    constructor (nombre, especialidad, telefono, cedula) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }

    getPerfil () {
        return `${this.nombre}, ${this.especialidad}, ${this.telefono}, ${this.cedula}`;
    }
}
