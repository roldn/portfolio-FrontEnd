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


@NgModule({
  declarations: [AppComponent, NavBarComponent, BannerComponent, FooterComponent, ExperienciesComponent, AcercaDeComponent, EducacionComponent, SkillsComponent, ProyectosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
