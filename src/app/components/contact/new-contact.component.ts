import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  email:string="";
  telefono:string="";
  otroMedio:string="";

  constructor(private servContacto: ContactoService, private router: Router, private activatedRouter: ActivatedRoute, private tokenService: TokenService) { }
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
    this.router.navigate(['portfolioweb']);

  }
  }

  onCreate(): void {
    const expe = new Contacto(this.email, this.telefono, this.otroMedio);
    this.servContacto.save(expe).subscribe(
      data => {
        alert("Contacto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
