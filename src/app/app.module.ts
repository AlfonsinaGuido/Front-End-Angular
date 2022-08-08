import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { StudiesComponent } from './components/studies/studies.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    StudiesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    PortfoliowebComponent,
    ExperienceComponent,
    NewExperienceComponent,
    EditExperienciaComponent,
    NewstudyComponent,
    EditstudyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
