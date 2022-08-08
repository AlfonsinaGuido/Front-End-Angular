export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    profesion: string;
    logo: string;
    imgFondo: string;
    email: string;
    telefono: string;
    acerca: string;
    softSkills: string;
    hardSkills: string;
    cv: string;

    constructor(nombre: string, apellido: string, img: string, profesion: string, logo: string,  imgFondo: string, email: string, telefono: string, acerca: string, softSkills: string, hardSkills: string, cv: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.profesion = profesion;
        this.logo = logo;
        this.imgFondo = imgFondo;
        this.email = email;
        this.telefono = telefono;
        this.acerca = acerca;
        this.softSkills = softSkills;
        this.hardSkills = hardSkills;
        this.cv = cv;
    }
}