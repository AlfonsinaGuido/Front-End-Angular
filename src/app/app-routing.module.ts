import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfoliowebComponent } from './components/portfolioweb/portfolioweb.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewstudyComponent } from './components/studies/newstudy.component';
import { EditstudyComponent } from './components/studies/editstudy.component';
import { NewDatosComponent } from './components/datos-personales/new-datos.component';
import { EditDatosComponent } from './components/datos-personales/edit-datos.component';
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
  {path:'login', component: LoginComponent},
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
