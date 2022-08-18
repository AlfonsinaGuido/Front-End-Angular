import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  contacto: Contacto = null;

  constructor(
    private contactoServ: ContactoService,
    private activatedRouter: ActivatedRoute,
    private router: Router, 
    private tokenService: TokenService

  ) { }
  isLogged = false;

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {




    this.contactoServ.detail(id).subscribe(
      data => {
        this.contacto=data;
      }, err =>{
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  } else {
    alert("No autorizado")
    this.router.navigate(['']);

  }

}


  
onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.contactoServ.update(id, this.contacto).subscribe(
  data => {
    this.router.navigate(['']);
  }, err =>{
    alert("error al modificar");
    this.router.navigate(['']);
  }
  )

}
}
