class Nombre {
    /**
     * 
     * @param {string} nombre Nombre de la persona
     * @param {string} apellidoPaterno Apellido paterno de la persona
     * @param {string} apellidoMaterno apellido materno de la persona
     */
    constructor (nombre, apellidoPaterno, apellidoMaterno) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
    }
    getApellidoNombre() {
        return `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;
    }
    getIniciales() {
        return ``
    }
}