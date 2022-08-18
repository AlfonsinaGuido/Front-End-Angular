import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {

    nameSkill: string = "";
    progress: number = 0;
    imgSkill: string = "";

  constructor(private skillsS: SkillsService, private router: Router, private activatedRouter: ActivatedRoute,
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
  const skills = new Skills(this.nameSkill, this.progress, this.imgSkill);
  this.skillsS.save(skills).subscribe(data =>{
    alert("Skill agregada");
    this.router.navigate(['']);
  },err =>{
  alert("falló");
  this.router.navigate(['']);
  }  
  )
}
}
