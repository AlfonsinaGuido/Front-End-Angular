import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosPersonales } from 'src/app/model/datos-personales';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.css']
})
export class EditDatosComponent implements OnInit {
  datos: DatosPersonales = null;

  constructor(private DatosPersonales: DatosPersonalesService, private activatedRouter: ActivatedRoute,
    private router: Router, private tokenService: TokenService) { }
    isLogged = false;
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {

    this.DatosPersonales.detail(id).subscribe(
      data =>{
        this.datos = data;
      }, err =>{
        alert("Error al modificar datos");
        this.router.navigate(['']);
      }
    )
  } else {
    alert("No autorizado")
    this.router.navigate(['portfolioweb']);

  }
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.DatosPersonales.update(id, this.datos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar datos");
         this.router.navigate(['']);
      }
    )
  }

}
