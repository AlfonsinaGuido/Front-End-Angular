export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    logo: string;
    

    constructor(nombre: string, apellido: string, img: string, logo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.logo = logo;
    }
}