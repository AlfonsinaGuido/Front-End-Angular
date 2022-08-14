import { Component, OnInit } from '@angular/core';
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
    this.DatosPersonales.lista().subscribe(data => { this.datos = data; })
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

