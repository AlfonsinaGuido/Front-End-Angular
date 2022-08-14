export class DatosPersonales {
    
        id?: number;
        nombreCompleto: string;
        profesion: string;
        imgPerfil: string;
        ubicacion: string;
        cv: string;
    
        constructor(nombreCompleto: string, profesion: string, imgPerfil: string, ubicacion: string, cv: string){
            this.nombreCompleto = nombreCompleto;
            this.profesion = profesion;
            this.imgPerfil = imgPerfil;
            this.ubicacion = ubicacion;
            this.cv = cv;
        }
    
}
