import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  id: number 
  nombreProy: string = "";
  descProy: string ="" ;
  webProy: string = "" ;

  constructor(private proyectoServ: ProyectosService, private router: Router, private activatedRouter: ActivatedRoute,
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

  onCreate():void{
    const proyectos = new Proyectos(this.nombreProy, this.descProy, this.webProy);
    this.proyectoServ.save(proyectos).subscribe(data =>{
      alert("Proyecto agregado");
      this.router.navigate(['']);
    },err =>{
    alert("falló");
    this.router.navigate(['']);
    }  
    )
}
}
