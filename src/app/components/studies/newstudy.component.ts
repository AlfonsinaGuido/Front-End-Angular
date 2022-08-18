import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-newstudy',
  templateUrl: './newstudy.component.html',
  styleUrls: ['./newstudy.component.css']
})
export class NewstudyComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  logoE: string;
  periodoAniosE: string;

  constructor(private educacionS: EducacionService, private router: Router, private activatedRouter: ActivatedRoute, private tokenService: TokenService) { }
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

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.logoE, this.periodoAniosE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}