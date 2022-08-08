import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  isLogged = false;
    
  persona: persona = new persona("","","","","","","","","","","","");
  
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

}