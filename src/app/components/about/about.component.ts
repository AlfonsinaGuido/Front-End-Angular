import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/services/about.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: About[] = []; 

 

constructor(private aboutServ: AboutService, private tokenService: TokenService){ }
isLogged = false;

  ngOnInit(): void {

    this.cargarAbout();

    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }

    
  };
  cargarAbout():void{
    this.aboutServ.lista().subscribe(
      data => {this.about=data;})
  }
  delete(id?: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.aboutServ.delete(id).subscribe(
          data => {
            this.cargarAbout();
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