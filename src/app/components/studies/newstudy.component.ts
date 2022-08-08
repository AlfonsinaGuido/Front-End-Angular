import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

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

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
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