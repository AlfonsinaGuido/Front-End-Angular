export class Contacto {
    
    id?: number;
    email: string;
    telefono: string;
    otroMedio: string;

    constructor(email: string, telefono: string, otroMedio: string){
        this.email = email;
        this.telefono = telefono;
        this.otroMedio = otroMedio;
    }

}