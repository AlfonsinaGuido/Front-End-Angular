import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  datos: DatosPersonales[] = [];
  isLoading = true;

  constructor(private DatosPersonales: DatosPersonalesService, private tokenService: TokenService) { }

  isLogged = false;
  

  ngOnInit(): void {
    this.cargarDatosPersonales();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }

  cargarDatosPersonales(): void {
    this.isLoading = true;
    this.DatosPersonales.lista()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(data => { this.datos = data });
  
  }

  delete(id?: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.DatosPersonales.delete(id).subscribe(
          data => {
            this.cargarDatosPersonales();
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

