import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciesComponent } from './componentes/body/experiencies/experiencies.component';
import { BannerComponent } from './componentes/body/header/banner/banner.component';
import { NavBarComponent } from './componentes/body/header/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AcercaDeComponent } from './componentes/body/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/body/educacion/educacion.component';
import { SkillsComponent } from './componentes/body/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/body/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NuevaExpComponent } from './componentes/body/experiencies/nueva-exp/nueva-exp.component';
import { EditarExpComponent } from './componentes/body/experiencies/editar-exp/editar-exp.component';
import { NuevaeduComponent } from './componentes/body/educacion/nuevaedu/nuevaedu.component';
import { EditareduComponent } from './componentes/body/educacion/editaredu/editaredu.component';
import { EditarProyectoComponent } from './componentes/body/proyectos/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/body/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarAcercaDeComponent } from './componentes/body/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { EditarHabilidadComponent } from './componentes/body/skills/editar-habilidad/editar-habilidad.component';
import { NuevaHabilidadComponent } from './componentes/body/skills/nueva-habilidad/nueva-habilidad.component';


@NgModule({
  declarations: [AppComponent,
    NavBarComponent, BannerComponent,
    FooterComponent, ExperienciesComponent,
    AcercaDeComponent, EducacionComponent,
    SkillsComponent, ProyectosComponent,
    HomeComponent, LoginComponent,
    NuevaExpComponent, EditarExpComponent,
    NuevaeduComponent, EditareduComponent,
    EditarProyectoComponent, NuevoProyectoComponent,
    EditarAcercaDeComponent, EditarHabilidadComponent,
    NuevaHabilidadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
