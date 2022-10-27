import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditarAcercaDeComponent } from './componentes/body/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EditareduComponent } from './componentes/body/educacion/editaredu/editaredu.component';
import { NuevaeduComponent } from './componentes/body/educacion/nuevaedu/nuevaedu.component';
import { EditarExpComponent } from './componentes/body/experiencies/editar-exp/editar-exp.component';
import { NuevaExpComponent } from './componentes/body/experiencies/nueva-exp/nueva-exp.component';
import { EditarProyectoComponent } from './componentes/body/proyectos/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/body/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarHabilidadComponent } from './componentes/body/skills/editar-habilidad/editar-habilidad.component';
import { NuevaHabilidadComponent } from './componentes/body/skills/nueva-habilidad/nueva-habilidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExpComponent},
  {path:'editarexp/:id', component: EditarExpComponent},
  {path:'nuevaedu', component: NuevaeduComponent},
  {path:'editaredu/:id', component: EditareduComponent},
  {path:'nuevoproyecto', component: NuevoProyectoComponent},
  {path:'editarproyecto/:id', component: EditarProyectoComponent},
  {path:'nuevahabilidad', component: NuevaHabilidadComponent},
  {path:'editarhabilidad/:id', component: EditarHabilidadComponent},
  {path:'editaracercade/:id', component:EditarAcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgCircleProgressModule.forRoot({})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
