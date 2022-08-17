import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfoliowebComponent } from './components/portfolioweb/portfolioweb.component';
import { StudiesComponent } from './components/studies/studies.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewstudyComponent } from './components/studies/newstudy.component';
import { EditstudyComponent } from './components/studies/editstudy.component';
import { NewDatosComponent } from './components/datos-personales/new-datos.component';
import { EditDatosComponent } from './components/datos-personales/edit-datos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewAboutComponent } from './components/about/new-about.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditContactComponent } from './components/contact/edit-contact.component';
import { NewContactComponent } from './components/contact/new-contact.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'portfolioweb', component:PortfoliowebComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: PortfoliowebComponent},
  {path:'about', component: AboutComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'studies', component: StudiesComponent},
  {path:'skills', component: SkillsComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contact', component: ContactComponent},
  {path:'', component: PortfoliowebComponent},
  {path:'nuevaexp', component: NewExperienceComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewstudyComponent},
  {path: 'editedu/:id', component: EditstudyComponent},
  {path: 'nuevosdatos', component: NewDatosComponent},
  {path: 'editdatos/:id', component: EditDatosComponent},
  {path: 'nuevaskill', component: NewSkillsComponent},
  {path: 'editskill/:id', component:EditSkillsComponent},
  { path: 'nuevoabout', component:NewAboutComponent },
  { path: 'editabout/:id', component:EditAboutComponent },
  { path: 'nuevocontacto', component:NewContactComponent },
  { path: 'editcontacto/:id', component:EditContactComponent },
  { path: 'nuevoproyecto', component:NewProjectComponent },
  { path: 'editproyecto/:id', component:EditProjectComponent },
  { path: 'messageSent', component:GratitudeComponent },
  { path: 'page404', component: NotFoundComponent },
  { path: '**', redirectTo: 'page404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
