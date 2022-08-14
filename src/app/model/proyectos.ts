export class Proyectos {
    id: number 
    nombreProy: string;
    descProy: string;
    webProy: string;

    constructor(nombreProy:string, descProy: string, webProy: string){
        this.nombreProy = nombreProy;
        this.descProy = descProy;
        this.webProy = webProy;
    }

}