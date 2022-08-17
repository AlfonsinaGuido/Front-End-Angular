import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PortfoliowebComponent } from './components/portfolioweb/portfolioweb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { ExperienceComponent } from './components/experience/experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewstudyComponent } from './components/studies/newstudy.component';
import { EditstudyComponent } from './components/studies/editstudy.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { NewDatosComponent } from './components/datos-personales/new-datos.component';
import { EditDatosComponent } from './components/datos-personales/edit-datos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { NewAboutComponent } from './components/about/new-about.component';
import { EditContactComponent } from './components/contact/edit-contact.component';
import { NewContactComponent } from './components/contact/new-contact.component';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    StudiesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    PortfoliowebComponent,
    ExperienceComponent,
    NewExperienceComponent,
    EditExperienciaComponent,
    NewstudyComponent,
    EditstudyComponent,
    DatosPersonalesComponent,
    NewDatosComponent,
    EditDatosComponent,
    SkillsComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditAboutComponent,
    NewAboutComponent,
    EditContactComponent,
    NewContactComponent,
    NewProjectComponent,
    EditProjectComponent,
    GratitudeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(),
    NgCircleProgressModule.forRoot({})
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
