import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-datos',
  templateUrl: './new-datos.component.html',
  styleUrls: ['./new-datos.component.css']
})
export class NewDatosComponent implements OnInit {

  nombreCompleto: string = '';
  profesion: string = '';
  imgPerfil: string = '';
  ubicacion: string = '';
  cv: string = '';

  constructor(private DatosPersonales: DatosPersonalesService, private router: Router, private activatedRouter: ActivatedRoute,
  private tokenService: TokenService) { }
    isLogged = false;
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {


  } else {
    alert("No autorizado")
    this.router.navigate(['']);

  }
  }

  onCreate(): void {
    const datos = new DatosPersonales(this.nombreCompleto, this.profesion, this.imgPerfil, this.ubicacion, this.cv);
    this.DatosPersonales.save(datos).subscribe(
      data => {
        alert("Datos añadidos");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}