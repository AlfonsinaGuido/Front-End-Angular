import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { sortByMostRecentPeriod } from 'src/app/utils/period-sort';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  
  educacion: Educacion[] = [];
  
  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = sortByMostRecentPeriod(data, educacion => educacion.periodoAniosE);
      }
    )
  }

  delete(id?: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.educacionS.delete(id).subscribe(
          data => {
            this.cargarEducacion();
          }, err => {
            alert("No se pudo eliminar")
          }
        )
      }
    } else {
      alert("cancelado")
    }
  }


}
