import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacto: Contacto[] = []; 

  constructor(private contactoServ: ContactoService, private tokenService: TokenService) { }
  
  isLogged = false;
  
  ngOnInit(): void {

    this.cargarContacto();

    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }

    
  }
  cargarContacto():void{
    this.contactoServ.lista().subscribe(
      data => {this.contacto=data;})
  }
  

  delete(id?: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.contactoServ.delete(id).subscribe(
          data => {
            this.cargarContacto();
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