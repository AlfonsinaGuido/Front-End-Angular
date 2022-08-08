import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { persona } from 'src/app/model/persona.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  
  educacion: Educacion[] = [];

  persona: persona = new persona("","","","","","","","","","","","");
  
  constructor(private educacionS: EducacionService, private tokenService: TokenService, public personaService: PersonaService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personaService.getPersona().subscribe(data => {
      this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }


}