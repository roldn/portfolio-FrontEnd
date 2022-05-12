import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciesComponent } from './componentes/body/experiencies/experiencies.component';
import { HomeComponent } from './componentes/body/home/home.component';
import { NavBarComponent } from './componentes/body/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';



@NgModule({
  declarations: [AppComponent,NavBarComponent,HomeComponent,FooterComponent,ExperienciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
