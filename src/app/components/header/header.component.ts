import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  
  persona: persona = new persona("","","","");
  
  constructor(public personaService: PersonaService, private router:Router, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
    
  }
  
  menuRollback() {
    if (window.innerWidth < 992) {
      document.getElementById('closeNav').click()
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }


}