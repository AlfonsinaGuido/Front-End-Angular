import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfoliowebComponent } from './components/portfolioweb/portfolioweb.component';
import { StudiesComponent } from './components/studies/studies.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewstudyComponent } from './components/studies/newstudy.component';
import { EditstudyComponent } from './components/studies/editstudy.component';

const routes: Routes = [
  {path:'portfolioweb', component:PortfoliowebComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: PortfoliowebComponent},
  {path:'about', component: AboutComponent},
  {path:'experience', component: ExperienceComponent},
  {path:'studies', component: StudiesComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'contact', component: ContactComponent},
  {path:'', component: PortfoliowebComponent},
  {path:'nuevaexp', component: NewExperienceComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewstudyComponent},
  {path: 'editedu/:id', component: EditstudyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
